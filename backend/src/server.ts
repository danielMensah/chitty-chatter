import { ApolloServer } from 'apollo-server';
import { connect } from 'mongoose';
import Utils from './utils';
import middlware from './middleware';

const CONNECTION_STRING = 'mongodb://localhost:27017/Chatter';

class Server {
	private readonly server: ApolloServer;

	constructor() {
		this.server = new ApolloServer(middlware);
	}

	start() {
		this.server.listen(process.env.PORT || 4000).then(({ url }) => {
			console.log(`🚀 Server ready at ${url}`);
		});
	}
}

(async () => {
	const utils = new Utils();

	const [err] = await utils.to(connect(CONNECTION_STRING, { useNewUrlParser: true }));

    if (err) {
		console.log(err);
		return;
	}

	console.log('mongodb connected!');

	const server = new Server();
	server.start();
})();