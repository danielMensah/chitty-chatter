export type IMessage = {
    conversationId?: string;
    senderId?: string;
    receiverId?: string;
    senderDisplayName: string;
    receiverDisplayName: string;
    message: string;
}

export type IConversation = {
    id: string;
    senderId: string;
    receiverId: string;
    archived: boolean;
    messages?: IMessage[];
}