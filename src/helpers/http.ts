export interface HttpRequest {
  statusCode: number
  body: unknown
}

export interface HttpResponse<T> {
  statusCode: number
  body: T | string
}