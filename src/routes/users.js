import express from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  const users = require("../../data/users.json");
  res.render('users', { users: users });
});

router.get('/:user', (req, res) => {
  const user = req.params.user;
  const users = require("../../data/users.json");
  res.render('users', { online_users: users, user : user });
});

router.get('/:source/:user', (req, res) => {
  const user = req.params.user;
  const source = req.params.source;
  const users = require("../../data/users.json");
  res.render('request', { online_users: users, user : user, source: source });
});

export default router;
