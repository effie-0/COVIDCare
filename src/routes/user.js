import express from 'express';
import UserController from '../controllers/user';

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

router.post('/', UserController.signin);

export default router;
