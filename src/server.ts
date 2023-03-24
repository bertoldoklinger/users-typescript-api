import { config } from 'dotenv'
import express from 'express'
import { GetUsersController } from './controllers/users/GetUsersController'
import { MongoClient } from './database/mongo'
import { MongoGetUsersRepository } from './repositories/get-users/mongo-get-users'

const main = async () => {
  const app = express()

  config()

  const port = process.env.PORT ?? 3450

  await MongoClient.connect()

  app.get('/users', async (req, res) => {
    const getUsersRepository = new MongoGetUsersRepository()
    const getUsersController = new GetUsersController(getUsersRepository)

    const { body, statusCode } = await getUsersController.handle()
    res.send(body).status(statusCode)
  })

  app.listen(port, () => { console.log(`Server running on port ${port}`); })
}

main()




