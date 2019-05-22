import { UserModel } from "../models/user.model";

export default {
    Query: {
        getUser: async (_, { userName }, { dataSources }) => dataSources.userController.getUser(userName),
        getUsers: async (_, args, { dataSources }) => dataSources.userController.getUsers()
    },
    Mutation: {
        createUser: async (_, userData: UserModel, { dataSources }) => dataSources.userController.createUser(userData)
    }
};