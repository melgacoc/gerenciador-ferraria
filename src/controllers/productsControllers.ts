import { Request, Response } from 'express';
import ProductService from '../services/productsServices';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  async getAll(_req: Request, res: Response): Promise<void> {
    const result = await this.productService.getAll();
    res.status(200).json(result);
  }

  async addProduct(req: Request, res: Response): Promise<void> {
    const newProductInfos = req.body;
    const result = await this.productService.addProduct(newProductInfos);
    res.status(201).json(result);
  }
}