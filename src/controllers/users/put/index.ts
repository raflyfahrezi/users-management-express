import { eq } from 'drizzle-orm'
import { Request, Response, NextFunction } from 'express'
import { createInsertSchema } from 'drizzle-zod'

import { responseSchema } from '@/utils'
import { db, usersTable } from '@/database'
import { STATUS_BAD_REQUEST, STATUS_UNPROCESSABLE_ENTITY } from '@/constants'

export const usersPut = async (req: Request, res: Response) => {
  const body = req.body
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

  const testBody = createInsertSchema(usersTable)
  const testResult = testBody.safeParse(body)

  if (!testResult.success) {
    res.statusCode = STATUS_UNPROCESSABLE_ENTITY.code

    res.json(
      responseSchema({
        code: res.statusCode,
        data: null,
        message: STATUS_UNPROCESSABLE_ENTITY.message,
      })
    )

    return
  }

  await db.update(usersTable).set(body).where(eq(usersTable.id, paramsIDNumber))

  res.json(
    responseSchema({
      code: res.statusCode,
      data: body,
      message: 'Update user success',
    })
  )
}
