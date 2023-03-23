import { type IGetUsersRepository } from "@/controllers/users/protocols";
import { type User } from "@/models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [{
      name: 'Bertoldo',
      email: 'bertoldokbrj@gmail.com',
      password: '123'
    }]
  }

}