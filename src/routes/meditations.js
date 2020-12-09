import express from 'express';

const router = express.Router();
const meditations = require('../../data/meditations.json');

/* GET users listing. */
router.get('/', (req, res) => {
  res.render('meditations', { meditations });
});

router.get('/:name', (req, res) => {
  const meditationName = req.params.name;
  const fileName = meditationName;
  res.render('musicPlayer', { file: fileName });
});

export default router;
