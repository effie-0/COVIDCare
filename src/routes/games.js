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
    const user = users[0].name
    console.log(user)
    res.render('users', { online_users: users, user:user });
  } else {
    res.render('coming_soon', { title : game_name });
  }
});


export default router;
