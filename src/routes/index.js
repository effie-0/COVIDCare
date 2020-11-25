import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/storyPreview', (req, res) => {
  res.render('storyPreview', { title: 'Stroy preview ' });
});

export default router;
