import connection from '../models/connection';
import UserModel from '../models/user';
import { User } from '../interfaces/userInterfaces';
import { validateUser } from './validacao';

class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public findOne = async (username: string): Promise<User> => {
    const user = await this.model.findOne(username);
    return user;
  };

  public create = async (user: User): Promise<User> => {
    validateUser(user);
    const newUser = await this.model.create(user);
    return newUser;
  };
}

export default UserService;