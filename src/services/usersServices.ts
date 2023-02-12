import UserModel from '../models/usersModels';
import { IUser } from '../interfaces/users';

export default class UserService {
  constructor(private userModel = new UserModel()) {}

  async newUser(newUser: IUser): Promise<IUser> {
    return this.userModel.newUser(newUser);
  }
}
