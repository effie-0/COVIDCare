import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
  },
  password: { type: String },
  role: { type: String, default: 'Patient' },
});

const UserModel = mongoose.model('user', userSchema);
export default UserModel;
