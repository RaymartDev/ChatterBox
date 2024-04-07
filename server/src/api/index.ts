import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import user from './user';
const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'ChatterBox version 1 API',
  });
});

router.use('/user', user);

export default router;
