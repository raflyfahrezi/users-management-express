import { TResponseStatus } from '@/models'

export const STATUS_UNPROCESSABLE_ENTITY: TResponseStatus = {
  code: 499,
  message: 'Unprocessable Entity',
}

export const STATUS_CONFLICT: TResponseStatus = {
  code: 409,
  message: 'Conflict',
}
