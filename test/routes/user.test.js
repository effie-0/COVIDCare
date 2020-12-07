import mongoose from 'mongoose';
import request from 'supertest';
import app from '../../src/app';
import connect from '../../src/utils/connect';
import UserModel from '../../src/models/user';
import { MONGO_URI } from '../../src/utils/env';


describe('test the UserDAO', () => {
  let mongoServer;

  beforeAll(async () => {
    connect(MONGO_URI);
    mongoServer = mongoose.connection;

    // insert a user
    // const req = { username: 'Mu', password: '122222' };
    // const res = await request(server.server)
    //   .post(`/users/${req.username}`)
    //   .type('form')
    //   .send(req);
    // expect(res.status).toBe(201);
  });

  afterAll(async () => {
    await UserModel.deleteMany({});
    await mongoose.disconnect();
    await mongoServer.close();
  });

  test('POST /users', async () => {
    const req = { username: 'Marc', password: '112222' };

    return request(app)
      .post('/users')
      .type('form')
      .send(req)
      .expect(404);
  });
});
