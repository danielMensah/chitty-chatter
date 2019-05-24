import React, { FC, Fragment } from 'react';
import { IConversation, IMessage } from "./types";

const Conversation: FC<IConversation> = (conversation) => {
    if (conversation.messages) {
        return (
            <Fragment>
                {
                    conversation.messages.map((message, index) => {
                        return (
                            <Message
                                key={index}
                                message={message.message}
                                receiverDisplayName={message.receiverDisplayName}
                                senderDisplayName={message.senderDisplayName}
                            />
                        )
                    })
                }
            </Fragment>
        )
    }

    return <div>Nothing for: {conversation.id}</div>
};

const Message: FC<IMessage> = (message) => {
    return (
        <div>
            {message.message}
        </div>
    )
};

export default Conversation;