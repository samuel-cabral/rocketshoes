import { Router } from 'express';

const stockRouter = Router();

stockRouter.post('/');
stockRouter.get('/');
stockRouter.put('/');
stockRouter.delete('/');

export { stockRouter };
