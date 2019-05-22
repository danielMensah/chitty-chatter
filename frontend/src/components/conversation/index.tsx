import React from 'react';

interface IMessage {
    conversationId?: string;
    senderId?: string;
    receiverId?: string;
    senderDisplayName: string;
    receiverDisplayName: string;
    message: string;
}

interface IConversation {
    id: string;
    senderId: string;
    receiverId: string;
    archived: boolean;
    messages?: IMessage[];
}


const Conversation = (conversation: IConversation) => {
    if (conversation.messages) {
        return (
            conversation.messages.map((meesage, index) => {
                return <Message/>
            })
        )
    }

    return <div>Nothing for: {conversation.id}</div>
};

const Message = (props) => {
    return (
        <div>

        </div>
    )
};

export default Conversation;