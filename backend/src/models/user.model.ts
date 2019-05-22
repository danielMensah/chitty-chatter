import mongoose, { Document, Schema } from 'mongoose';

export interface UserModel extends Document{
    userName: string;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
}

const UserSchema: Schema = new Schema({
    _id: mongoose.Types.ObjectId,
    userName: String,
    firstName: String,
    lastName: String,
    gender: String,
    email: String,
});

UserSchema.set('timestamps', true);

export default mongoose.model<UserModel>('User', UserSchema);