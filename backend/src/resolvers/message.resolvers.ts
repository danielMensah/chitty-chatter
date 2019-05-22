import { MessageModel } from "../models/message.model";

export default {
    Query: {
		getConversations: async (_, args, { dataSources }) => dataSources.messageController.getConversations(),
		getConversationById: async (_, { id }, { dataSources }) => dataSources.messageController.getConversationById(id),
		getConversationByUserId: async (_, { userId }, { dataSources }) => dataSources.messageController.getConversationByUserId(userId)
	},
	Mutation: {
		sendMessage: async (_, messageData: MessageModel, { dataSources }) => dataSources.messageController.sendMessage(messageData)
	}
};