import express from 'express';
const storysharingController = require("../controllers/storysharingController")

const router = express.Router();

/* GET story listing. */
router.get('/', (req, res) => {
  
  res.send('  respond with a story');

});

router.get('/storydetailsData', (req, res) => {

  var final_respond= storysharingController.allStories(req, res)
  
  res.send(final_respond);

});

export default router;
