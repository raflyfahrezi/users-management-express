import { or, ilike } from 'drizzle-orm'
import { Request } from 'express'

import { responseSchema } from '@/utils'
import { db, usersTable } from '@/database'

export const getUsers = (req: Request) => {
  const query = req.query
  const querySearch = query.search ?? ''

  return db
    .select()
    .from(usersTable)
    .where(
      or(
        ilike(usersTable.name, `%${querySearch ?? ''}%`),
        ilike(usersTable.email, `%${querySearch ?? ''}%`)
      )
    )
}
