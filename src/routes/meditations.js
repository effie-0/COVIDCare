import express from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
    const meditations = require("../../data/meditations.json");
    res.render('meditations', { meditations: meditations });
});

router.get('/:name', (req, res) => {
    const meditation_name = req.params.name;
    const file_name = meditation_name;
    res.render('music_player', { file: file_name });
});


export default router;