import { z } from 'zod'

export type TResponseSchema<T> = {
  code: number
  data: T
  message: string
}
