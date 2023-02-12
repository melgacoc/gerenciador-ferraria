import OrderModel from '../models/ordersModels';
import { IOrder } from '../interfaces/orders';

export default class OrderService {
  constructor(private orderModel = new OrderModel()) {}

  async getAll(): Promise<IOrder[]> {
    return this.orderModel.getAll();
  }
}