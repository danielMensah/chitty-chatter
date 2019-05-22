import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import UserController from './controllers/user.controller';
import MessageController from './controllers/message.controller';

const typesArray = fileLoader(path.join(__dirname, './schemas'));
const resolversArray = fileLoader(path.join(__dirname, './resolvers'));

const typeDefs = mergeTypes(typesArray, { all: true });
const resolvers = mergeResolvers(resolversArray);

const dataSources = () => ({
	userController: new UserController(),
	messageController: new MessageController()
});

export default {
	typeDefs,
	resolvers,
	dataSources
}