export enum STATUS_CODE {
    BAD_REQUEST = 400,
    OK = 200,
    NOT_FOUND = 404,
    SERVER_ERROR = 500
}

export type Request = {
    alias: string
    config: RequestInit
    url: string
}

export type Response<T = Record<string, unknown>> = {
    alias: string
    body: T
    statusCode: STATUS_CODE
    url: string
}
