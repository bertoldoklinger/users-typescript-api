import { config } from 'dotenv'
import express from 'express'
import { GetUsersController } from './controllers/users/GetUsersController'
import { MongoGetUsersRepository } from './repositories/get-users/mongo-get-users'

const app = express()

config()

const port = process.env.PORT ?? 3450

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.get('/users', async (req, res) => {
  const getUsersRepository = new MongoGetUsersRepository()
  const getUsersController = new GetUsersController(getUsersRepository)

  const { body, statusCode } = await getUsersController.handle()
  res.send(body).status(statusCode)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

