import express from 'express';
const router = express.Router();
const indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.indexPage);

router.get('/status', indexController.statusPage);
router.get('/status-empty-add', indexController.statusEmptyAddPage);
router.get('/status-empty-calendar', indexController.statusEmptyCalendarPage);
router.get('/status-one', indexController.statusOnePage);
router.get('/status-one-calendar', indexController.statusOneCalendarPage);

export default router;
