import express from 'express';

const router = express.Router();
const users = require("../../data/users.json");

/* GET users listing. */
router.get('/', (req, res) => {
  res.render('users', { users });
});

router.get('/:user', (req, res) => {
  const user = req.params.user;
  res.render('users', { users, user });
});

router.get('/:source/:user', (req, res) => {
  const user = req.params.user;
  const source = req.params.source;
  res.render('request', { users, user, source });
});

export default router;
