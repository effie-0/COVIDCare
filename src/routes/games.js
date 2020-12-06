import express from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  const games = require("../../data/games.json");
  res.render('games', { games: games });
});

router.get('/:name', (req, res) => {
  const game_name = req.params.name;
  if (game_name == "Tic Tac Toe") {
    const users = require("../../data/users.json");
    res.render('users', { users: users });
  }
});


export default router;
