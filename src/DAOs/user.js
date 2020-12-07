import UserModel from '../models/user';

export default class UserDAO {
  static async existOne(username) {
    const user = await UserModel.findOne({ username });
    if (user) {
      return true;
    }
    return false;
  }

  static async insertOne(newUser) {
    const user = new UserModel(newUser);
    try {
      await user.save();
    } catch (err) {
      return false;
    }
    return true;
  }

  static async findOne(username) {
    return UserModel.findOne({ username });
  }
}
