import express from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  const games = require("../../data/games.json");
  res.render('games', { games: games });
});

router.get('/:players', (req, res) => {
  const players = req.params.players.split("vs");
  res.render('game', { players: players });
  });


export default router;
