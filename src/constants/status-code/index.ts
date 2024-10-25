import { TResponseStatus } from '@/models'

export const STATUS_UNPROCESSABLE_ENTITY: TResponseStatus = {
  code: 499,
  message: 'Unprocessable Entity',
}

export const STATUS_CONFLICT: TResponseStatus = {
  code: 409,
  message: 'Conflict',
}

export const STATUS_INTERNAL_SERVER_ERROR: TResponseStatus = {
  code: 500,
  message: 'Internal Server Error',
}

export const STATUS_BAD_REQUEST: TResponseStatus = {
  code: 400,
  message: 'Bad Request',
}
