import { Router } from 'express';
import { productsRouter } from './products.routes';
import { stockRouter } from './stock.routes';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/stock', stockRouter);

export { routes };
