import express from 'express';

const router = express.Router();
const users = require("../../data/users.json");
const games = require("../../data/games.json");

router.get('/', (req, res) => {
  res.render('games', { games: games });
});

router.get('/:name', (req, res) => {
  const gameName = req.params.name;
  if (gameName === 'Tic Tac Toe') {
    const user = users[0].name
    res.render('users', { users, user });
  } else {
    res.render('coming_soon', { gameName });
  }
});


export default router;
