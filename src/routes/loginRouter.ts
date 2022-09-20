import { Router } from 'express';
import UserController from '../controllers/usersControllers';

const controller = new UserController();

const router = Router();

router.post('/', controller.login);

export default router;