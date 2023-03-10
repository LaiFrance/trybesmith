import { Router } from 'express';
import UserController from '../controllers/usersControllers';

const controller = new UserController();

const router = Router();

router.route('/')
  .post(controller.create);

export default router;