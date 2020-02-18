import express from 'express';

import UserController from '../modules/user';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('index route');
});

/* GET users listing. */
router.get('/users', (req, res) => {
  res.send('fetch users');
});

router.post('/user', UserController.createNewUser);
router.get('/user', UserController.loginUser);

export default router;
