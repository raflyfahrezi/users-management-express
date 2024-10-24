import { InferSelectModel } from 'drizzle-orm'

import { usersTable } from '@/database'

export interface IUsers extends InferSelectModel<typeof usersTable> {}

export type TResponseSchema<T> = {
  code: number
  data: T
  message: string
}
