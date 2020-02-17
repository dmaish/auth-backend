import express from 'express';
import userRoutes from './users';

const router = express.Router();

/* GET home page. */
// router.get('/', (req, res) => {
//   res.send('Hello World');
// });

router.use('/', userRoutes);

export default router;
