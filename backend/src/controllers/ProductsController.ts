import { Request, Response } from 'express';

export class ProductsController {
  public async index(request: Request, response: Response): Promise<Response> {
    return response.json({ ok: true });
  }
}
