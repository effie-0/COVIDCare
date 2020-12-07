import UserDAO from '../DAOs/user';

export default class UserController {
  static async signin(req, res) {
    const { username, password } = req.body;

    const user = await UserDAO.findOne(username);
    if (user && user.username) {
      if (user.password === password) {
        res.status(200).json({ message: 'ok' });
      } else {
        res.status(403).json({ message: 'wrong password' });
      }
    } else {
      res.status(404).json({ message: 'user not found' });
    }
  }
}
