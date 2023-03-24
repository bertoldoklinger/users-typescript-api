import { Db, MongoClient as Client } from 'mongodb'


export const MongoClient = {
  client: undefined as unknown as Client,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const url = process.env.MONGO_URL ?? 'mongodb+srv://cluster0.o1gbdkr.mongodb.net'
    const username = process.env.MONGO_USERNAME
    const password = process.env.MONGO_PASSWORD

    const client = new Client(url, { auth: { username, password } })
    const db = client.db("users-db")

    this.client = client
    this.db = db

    console.log("Connected to MongoDB")
  }
}