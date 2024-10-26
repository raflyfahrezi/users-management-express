import { eq } from 'drizzle-orm'
import { Request, Response } from 'express'

import { responseSchema } from '@/utils'
import { db, usersTable } from '@/database'
import { STATUS_BAD_REQUEST } from '@/constants'

export const usersDelete = async (req: Request, res: Response) => {
  const paramsID = req.params.id
  const paramsIDNumber = Number(paramsID)

  if (isNaN(paramsIDNumber)) {
    res.statusCode = STATUS_BAD_REQUEST.code

    res.json(
      responseSchema({
        code: res.statusCode,
        data: null,
        message: 'ID is invalid',
      })
    )

    return
  }

  const response = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, paramsIDNumber))
  await db.delete(usersTable).where(eq(usersTable.id, paramsIDNumber))

  res.json(
    responseSchema({
      code: res.statusCode,
      data: response[0] ?? {},
      message: 'Delete user success',
    })
  )
}
