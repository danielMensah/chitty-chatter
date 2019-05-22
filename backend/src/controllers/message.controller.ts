import { RESTDataSource } from 'apollo-datasource-rest';
import { Types } from 'mongoose';
import { MessageModel, ConversationModel, Conversation, Message } from '../models/message.model';
import Utils from '../utils';

export default class MessageController extends RESTDataSource {
	private utils = new Utils;

	async getConversations(): Promise<ConversationModel[]> {
		const [err, data] = await this.utils.to(Conversation.find());
		if (err) throw err;

		return data;
	}

	async getConversationById(id: Types.ObjectId): Promise<ConversationModel> {
		const [err, data] = await this.utils.to(Conversation.findById(id));
		if (err) throw err;

		return data;
	}

	async getConversationByUserId(userId: Types.ObjectId): Promise<ConversationModel> {
		const [err, data] = await this.utils.to(Conversation.findOne({ 
			senderId: userId 
		}));
		
		if (err) throw err;

		return data;
	}

	async createConversation(conversationData) {
		const _id = new Types.ObjectId();

		const conversation = new Conversation({
			...conversationData,
			_id,
		});

		return conversation.save()
			.then(() => conversation._id);
	}

	async sendMessage(messageData: MessageModel): Promise<MessageModel> {
		const _id = new Types.ObjectId();

		if (messageData.conversationId) {

			const message = new Message({
				...messageData, _id
			});

			return this.updateConversation(message).then(() => message);

		} else {
			const conversation = {
				senderId: messageData.senderId,
				receiverId: messageData.receiverId,
				archived: false
			};

			return this.createConversation(conversation).then( async (conversationId: Types.ObjectId) => {
				const message = new Message({
					...messageData, _id, conversationId
				});

				return this.updateConversation(message).then(() => message);
			});
		}
	}

	async updateConversation(message: MessageModel) {
		return Conversation.findOneAndUpdate(
			{ _id: message.conversationId },
			{	$push: { messages: message } }
		)

	}

}
