import { Router } from 'express';
import { ProductsController } from '../controllers/ProductsController';

const productsController = new ProductsController();

const productsRouter = Router();

productsRouter.post('/');
productsRouter.get('/', productsController.index);
productsRouter.put('/');
productsRouter.delete('/');

export { productsRouter };
