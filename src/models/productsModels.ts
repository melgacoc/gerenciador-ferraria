import { RowDataPacket } from 'mysql2';
import { Pool, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { IProduct } from '../interfaces/products';

export default class ProductModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<IProduct[]> {
    const [result] = await this.connection.execute<(IProduct & RowDataPacket)[]>(
      'SELECT * FROM Trybesmith.products ');

    return result;
  }

  public async addProduct(newProduct: IProduct): Promise<IProduct> {
    const { name, amount } = newProduct;
    const [result] = await this.connection.execute<ResultSetHeader>('INSERT INTO '
    + 'Trybesmith.products (name, amount) VALUES (?, ?)', [name, amount]);

    return { ...newProduct, id: result.insertId };
  }
}
