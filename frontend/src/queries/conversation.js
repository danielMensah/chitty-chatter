import { gql } from "apollo-boost";

export const CONVERSATIONS = gql`
  query {
    getConversations {
      id
      senderId
      receiverId
      archived
      messages {
        senderDisplayName
        receiverDisplayName
        message
      }
    }
  }
`;

export const CONVERSATION_BY_USER_ID = gql`
  query {
    getConversationByUserId(userId: "5cd6045249325e56ec0014f1"){
      id
      senderId
      receiverId
      archived
      messages {
        senderDisplayName
        receiverDisplayName
        message
      }
    }
  }
`;