import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser } from '../interfaces/users';

export default class UserModel {
  
  async newUser(newUser: IUser): Promise<IUser> {
    const { username, vocation, level, password } = newUser;
    const [result] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );

    return { ...newUser, id: result.insertId };
  }
}