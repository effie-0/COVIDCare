import express from 'express';
const storysharingController = require("../controllers/storysharingController")
const fetch = require("node-fetch");

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/storyPreview', (req, res) => {

fetch('http://localhost:3000/storysharing/storydetailsData')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
        response.json().then(function(data) {
          console.log(data);

          console.log("哈哈啊 "+data.data[0].title);

            res.render('storyPreview', {
        title: 'Stroy preview '    ,
        story_title_1: data.data[0].title,
        story_title_2:'he fight with Coid as a 69 years old fighter',
        story_title_3:'he fight with Coid as a 69 years old fighter',
        thumbup_number_1:'10',
        thumbup_number_2:'20',
        thumbup_number_3:'30',
        comment_number_1:'10',
        comment_number_2:'20',
        comment_number_3:'30'
    });


      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });


 
});

router.get('/storydetail', (req, res) => {


  res.render('storydetail', {
    title: 'Stroy details '
  });
});



export default router;