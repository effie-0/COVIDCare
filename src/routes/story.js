import express from 'express';

const storysharingController = require('../controllers/storysharingController');

const router = express.Router();

/* GET story listing. */
router.get('/', (req, res) => {
  res.send('  respond with a story');
});
// http://localhost:3000/storysharing/storydetailsData
router.get('/storydetailsData', (req, res) => {
  const final_respond = storysharingController.allStories(req, res);

  res.send(final_respond);
});

// http://localhost:3000/storysharing/addstorydetailsData
router.post('/addstorydetailsData', (req, res) => {
  const final_respond = storysharingController.addstoryDetails(req, res);

  res.send(final_respond);
});

export default router;
