import { gql } from "apollo-boost";

export const USERS = gql`
  query {
    getUsers {
      id
      userName
      firstName
      lastName
    }
  }
`;

export const USER_BY_USERNAME = (username) => {
  return(
    gql`
      query {
        getUser(userName: username) {
          id
          userName
          firstName
          lastName
        }
      }
    `
  )
};