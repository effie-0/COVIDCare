import express from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  const users = require("../../data/users.json");
  res.render('users', { users: users });
});

router.get('/:user', (req, res) => {
  const user = req.params.name;
  if (game_name == "Tic Tac Toe") {
    const users = require("../../data/users.json");
    res.render('users', { users: users });
  }
});

export default router;
