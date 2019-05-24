import { gql } from 'apollo-server';

export default gql`
    type Query {
        getConversations: [Conversation],
        getConversationById(id: String!): Conversation,
        getConversationByUserId(userId: String!): Conversation
    }

    type Conversation {
        id: String!,
        senderId: String!,
        receiverId: String!,
        archived: Boolean!,
        messages: [Message]
    }

    type Message {
        id: String!,
        conversationId: String,
        senderDisplayName: String!,
        receiverDisplayName: String!,
        message: String!
    }

    type Mutation {
        sendMessage(
            conversationId: String,
            senderId: String,
            receiverId: String,
            senderDisplayName: String!,
            receiverDisplayName: String!,
            message: String!,
        ): Message!
    }
`;