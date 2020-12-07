import express from 'express';

const router = express.Router();
const users = require('../../data/users.json');

/* GET users listing. */
router.get('/', (req, res) => {
  res.render('users', { users });
});

router.get('/:user', (req, res) => {
  res.render('users', { users, user: req.params.user });
});

router.get('/:source/:user', (req, res) => {
  res.render('request', { users, user: req.params.user, source: req.params.source });
});

export default router;
