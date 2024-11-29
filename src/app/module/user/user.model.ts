import { model, Schema } from 'mongoose';
import { IUser } from './user.interface';

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  photo: { type: String, default: null },
  role: { type: String, enum: ['user', 'admin'], required: true },
  userStatus: { type: String, enum: ['active', 'inactive'], required: true },
});

// 3. Create a Model.
export const User = model<IUser>('User', userSchema);
