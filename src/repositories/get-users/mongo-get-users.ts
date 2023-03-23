import { type User } from "@/models/user";
import { type IGetUsersRepository } from "@/protocols";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [{
      name: 'Bertoldo',
      email: 'bertoldokbrj@gmail.com',
      password: '123'
    }]
  }

}