import express from 'express';
import HealthController from '../controllers/health';

const fetch = require('node-fetch');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Express',
  });
});

// health status
router.get('/health', (req, res) => {
  res.render('health');
});

router.get('/symptoms', (req, res) => {
  res.render('symptoms');
});

router.get('/health-records', (req, res) => {
  const healthRecords = HealthController.getAllRecords();
  res.render('health-records', {
    healthRecords,
  });
});

router.get('/record-details/:time', (req, res) => {
  const { time } = req.params;
  const record = HealthController.getRecord(time);
  res.render('record-details', {
    record,
  });
});

router.get('/storyPreview', (req, res) => {
  fetch('https://srid-covid-care.herokuapp.com/storysharing/storydetailsData')
    .then(
      (response) => {
        if (response.status !== 200) {
          console.log(`Looks like there was a problem. Status Code: ${
            response.status}`);
          return;
        }

        // Examine the text in the response
        response.json().then((data) => {
          console.log(data);

          console.log(`哈哈啊 ${data.data[0].title}`);

          res.render('storyPreview', {
            title: 'Stroy preview ',
            story_title_1: data.data[0].title,
            story_title_2: data.data[1].title,
            story_title_3: data.data[2].title,
            thumbup_number_1: '10',
            thumbup_number_2: '20',
            thumbup_number_3: '30',
            comment_number_1: '10',
            comment_number_2: '20',
            comment_number_3: '30',
          });
        });
      },
    )
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
});

router.get('/storydetail', (req, res) => {
  fetch('https://srid-covid-care.herokuapp.com/storysharing/storydetailsData')
    .then(
      (response) => {
        if (response.status !== 200) {
          console.log(`Looks like there was a problem. Status Code: ${
            response.status}`);
          return;
        }
        // Examine the text in the response
        response.json().then((data) => {
          console.log(data);

          console.log(`哈哈啊 ${data.data[0].title}`);

          res.render('storydetail', {
            title: 'Stroy details ',
            story_content: data.data[0].content,
            story_title: data.data[0].title,
            story_comment: data.data[0].comments,
          });
        });
      },
    )
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
});

export default router;
