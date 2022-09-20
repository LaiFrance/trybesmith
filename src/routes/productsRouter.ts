import { Router } from 'express';
import ProductsControllers from '../controllers/productsControllers';

const router = Router();

const controller = new ProductsControllers();

router.route('/')
  .get(controller.getAll)
  .post(controller.create);

export default router;