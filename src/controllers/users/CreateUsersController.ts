import { HttpRequest, HttpResponse } from "@/helpers/http";
import { User } from "@/models/user";
import { CreateUserParams, ICreateUserController, ICreateUserRepository } from "./protocols";


export class CreateUserController implements ICreateUserController {
  constructor(private readonly createUserRepository: ICreateUserRepository) { }
  async handle(httpRequest: HttpRequest<CreateUserParams>): Promise<HttpResponse<User>> {
    try {
      if (!httpRequest.body) {
        return {
          statusCode: 400,
          body: "Bad Request"
        }
      }
      const { body } = httpRequest

      const user = await this.createUserRepository.createUser(body)

      return {
        statusCode: 201,
        body: user
      }


    } catch (err) {
      return {
        statusCode: 500,
        body: "App Error"
      }
    }
  }

}