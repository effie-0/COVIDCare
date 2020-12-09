import express from 'express';

const storysharingController = require('../controllers/storysharingController');

const router = express.Router();

/* GET story listing. */
router.get('/', (req, res) => {
  res.send('  respond with a story');
});
// http://localhost:3000/storysharing/storydetailsData
router.get('/storydetailsData', (req, res) => {
  const finalRespond = storysharingController.allStories(req, res);
  res.send(finalRespond);
});

// http://localhost:3000/storysharing/addstorydetailsData
router.post('/addstorydetailsData', (req, res) => {
  const finalRespond = storysharingController.addstoryDetails(req, res);

  res.send(finalRespond);
});

// http://localhost:3000/storysharing/sortstorydetailsData
router.get('/sortstorydetailsData', (req, res) => {
  const finalRespond = storysharingController.sortData(req,res)
  res.send(finalRespond);
});


export default router;
