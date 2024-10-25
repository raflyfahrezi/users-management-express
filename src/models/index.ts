import { InferSelectModel } from 'drizzle-orm'

import { usersTable } from '@/database'

export type TUsers = InferSelectModel<typeof usersTable>

export type TResponseStatus = {
  code: number
  message: string
}

export type TResponseSchema<T> = {
  code: number
  data: T
  message: string
}
