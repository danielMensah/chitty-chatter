import { RESTDataSource } from 'apollo-datasource-rest';
import User, { UserModel } from "../models/user.model";
import { Types } from 'mongoose';

export default class UserController extends RESTDataSource {
    
    async getUsers(): Promise<UserModel[]> {
        return User.find().then((data: UserModel[]) => data);
    }

    async getUser(userName: string): Promise<UserModel> {
        return User.findOne({ userName })
            .then((data: UserModel) => data);
    }

    async createUser(userData: UserModel): Promise<UserModel> {
        const user = new User({
            ...userData,
            _id: new Types.ObjectId()
        });

        return user.save()
            .then(() => user);
    }
}
