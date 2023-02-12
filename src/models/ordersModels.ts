import { RowDataPacket } from 'mysql2';
import { Pool } from 'mysql2/promise';
import connection from './connection';
import { IOrder } from '../interfaces/orders';

export default class OrderModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async getAll(): Promise<IOrder[]> {
    const [result] = await this.connection.execute<(IOrder & RowDataPacket)[]>(
      'SELECT orders.id, orders.user_id as userId, JSON_ARRAYAGG(products.id) AS productsIds'
      + ' FROM Trybesmith.orders INNER JOIN Trybesmith.products ON orders.id = products.order_id'
      + ' GROUP BY orders.id');

    return result;
  }
}