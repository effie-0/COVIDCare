import express from 'express';

const router = express.Router();
const games = require('../../data/games.json');

router.get('/', (req, res) => {
  res.render('games', { games });
});

router.get('/:players', (req, res) => {
  const players = req.params.players.split('vs');
  res.render('game', { players });
});

export default router;
