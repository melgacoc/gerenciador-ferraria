import { Request, Response } from 'express';
import OrderService from '../services/ordersServices';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  async getAll(_req: Request, res: Response): Promise<void> {
    const result = await this.orderService.getAll();
    res.status(200).json(result);
  }
}