import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { IUser } from '../interfaces/users';

export default class UserModel {
  public connection;

  constructor() {
    this.connection = connection;
  }

  public async newUser(newUser: IUser): Promise<IUser> {
    const { username, vocation, level, password } = newUser;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );

    return { ...newUser, id: result.insertId };
  }
}