import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import user from './user';
const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/user', user);

export default router;
