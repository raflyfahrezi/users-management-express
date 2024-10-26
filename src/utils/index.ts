import { NextFunction, Request, Response, ErrorRequestHandler } from 'express'

import { TResponseSchema } from '@/models'
import { STATUS_INTERNAL_SERVER_ERROR } from '@/constants'

export const responseSchema = <T>({
  code,
  data,
  message,
}: TResponseSchema<T>): TResponseSchema<T> => {
  return {
    code,
    data,
    message,
  }
}

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.statusCode = STATUS_INTERNAL_SERVER_ERROR.code
  res.json(
    responseSchema<null>({
      code: res.statusCode,
      data: null,
      message: STATUS_INTERNAL_SERVER_ERROR.message,
    })
  )
  res.end()
}
