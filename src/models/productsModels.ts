import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { IProduct } from '../interfaces/products';

export default class ProductModel {
  async getAll(): Promise<IProduct[]> {
    const [result] = await connection.execute<(IProduct & RowDataPacket)[]>(
      'SELECT * FROM Trybesmith.products ');

    return result;
  }
}
