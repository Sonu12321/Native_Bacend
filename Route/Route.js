import express from 'express';
import {
  Register,
  Login,
  ShowProfile,
  UserUpdate,
  UserDelete
} from '../Controller/UserController.js';
import { authMiddleware } from '../Middleware/Middleware.js';

const router = express.Router();

router.post('/register', Register);
router.post('/login', Login);

router.get('/profile', authMiddleware, ShowProfile);
router.put('/profile', authMiddleware, UserUpdate);
router.delete('/profile', authMiddleware, UserDelete);

export default router;

