import mongoose from 'mongoose';
import connect from '../../src/utils/connect';
import UserModel from '../../src/models/user';
import UserDAO from '../../src/DAOs/user';
import { MONGO_URI } from '../../src/utils/env';

describe('test the UserDAO', () => {
  let mongoServer;

  beforeAll(async () => {
    connect(MONGO_URI);
    mongoServer = mongoose.connection;
  });

  afterAll(async () => {
    await UserModel.deleteMany({});
    await mongoose.disconnect();
    await mongoServer.close();
  });

  test('test existOne', async () => {
    const mockUser = new UserModel({ username: 'John', password: 'xwrefqfet12' });
    await mockUser.save();

    const userExist = await UserDAO.existOne('John');
    const userNotExist = await UserDAO.existOne('Ann');
    expect(userExist).toBeTruthy();
    expect(userNotExist).toBeFalsy();
  });

  test('test insertOne: insert a user', async () => {
    const mockUser = { username: 'Alex', password: '1245676324' };
    await UserDAO.insertOne(mockUser);
    const user = await UserModel.findOne({ username: 'Alex' });
    expect(user).toBeDefined();
    expect(user.password).toBeDefined();
  });

  test('test findOne: find a user', async () => {
    const mockUser = new UserModel({ username: 'Bob', password: '123123' });
    await mockUser.save();
    const user = await UserDAO.findOne('Bob');
    expect(user.username).toBe('Bob');
    expect(user.password).toBe('123123');
  });
});
