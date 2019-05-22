import { gql } from 'apollo-server';

export default gql`
    type Query {
        getUser(userName: String!): User!,
        getUsers: [User]!
    }

    type User {
        id: String!,
        userName: String!,
        firstName: String!,
        lastName: String!,
        gender: String,
        email: String
    }

    type Mutation {
        createUser(userName: String!, firstName: String!, lastName: String!, gender: String, email: String): User!
    }
`;