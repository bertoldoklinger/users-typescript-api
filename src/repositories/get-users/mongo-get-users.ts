import { MongoClient } from "@/database/mongo";
import { type User } from "@/models/user";
import { type IGetUsersRepository } from "@/protocols";

export class MongoGetUsersRepository implements IGetUsersRepository {
  const users = await MongoClient.db.collection('users').find({}).toArray();
  async getUsers(): Promise<User[]> {
    return [{
      name: 'Bertoldo',
      email: 'bertoldokbrj@gmail.com',
      password: '123'
    }]
  }

}