import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserService from '../services/usersServices';
// const secret = process.env.JWT_SECRET as string;

export default class UserController {
  constructor(private userService = new UserService()) {}

  async newUser(req: Request, res: Response): Promise<void> {
    const newUserInfos = req.body;
    const requiredForToken = await this.userService.newUser(newUserInfos);

    const token = jwt.sign(
      requiredForToken,
      'nescaumelhorquetoddy',
      {
        expiresIn: '7d',
        algorithm: 'HS256',
      },
    );

    console.log(token);

    res.status(201).json({ token });
  }
}