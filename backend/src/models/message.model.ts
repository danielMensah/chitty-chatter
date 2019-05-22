import { Document, Schema, Types, model } from 'mongoose';
import { Type } from 'apollo-engine-reporting-protobuf';

// Message
export interface MessageModel extends Document {
	conversationId?: string;
	senderId?: Types.ObjectId;
	receiverId?: Types.ObjectId;
	senderDisplayName: string;
	receiverDisplayName: string;
	message: string;
}

const MessageSchema: Schema = new Schema({
	_id: { type: Types.ObjectId, required: true },
	conversationId: { type: Types.ObjectId, required: true },
	senderDisplayName: { type: String, required: true },
	receiverDisplayName: { type: String, required: true },
	message: { type: String, required: true }
});

MessageSchema.set('timestamps', true);

// Conversation
export interface ConversationModel extends Document {
	senderId: Types.ObjectId;
	receiverId: Types.ObjectId;
	archived: boolean;
	messages?: MessageModel[];
}

const ConversationSchema: Schema = new Schema({
	_id: { type: Types.ObjectId, required: true },
	senderId: { type: Types.ObjectId, required: true },
	receiverId: { type: Types.ObjectId, required: true },
	archived: { type: Boolean, required: true },
	messages: [MessageSchema]
});

ConversationSchema.set('timestamps', true);

const Conversation = model<ConversationModel>('Conversation', ConversationSchema);
const Message = model<MessageModel>('Message', MessageSchema);

export {
	Conversation,
	Message
};