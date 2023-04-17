import { HttpRequest, HttpResponse } from "@/helpers/http";
import { User } from "@/models/user";

export interface ICreateUserController {
  handle(httpRequest: HttpRequest<CreateUserParams>): Promise<HttpResponse<User>>
}

export interface CreateUserParams {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
}


export interface ICreateUserRepository {
  createUser(params: CreateUserParams): Promise<User>;
}