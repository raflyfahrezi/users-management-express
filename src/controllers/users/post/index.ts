import { Request, Response } from 'express'
import { createInsertSchema } from 'drizzle-zod'

import { TUsers } from '@/models'
import { responseSchema } from '@/utils'
import { db, usersTable } from '@/database'
import { STATUS_UNPROCESSABLE_ENTITY, STATUS_CONFLICT } from '@/constants'

export const usersPost = async (req: Request, res: Response) => {
  const body = req.body

  const testBody = createInsertSchema(usersTable)
  const testResult = testBody.safeParse(body)

  if (!testResult.success) {
    res.statusCode = STATUS_UNPROCESSABLE_ENTITY.code
    res.json(
      responseSchema<null>({
        code: res.statusCode,
        data: null,
        message: STATUS_UNPROCESSABLE_ENTITY.message,
      })
    )

    return
  }

  try {
    await db.insert(usersTable).values({
      ...body,
    })

    res.json(
      responseSchema<TUsers>({
        code: res.statusCode,
        data: { ...body },
        message: 'Create user success',
      })
    )
  } catch (error: any) {
    res.statusCode = STATUS_CONFLICT.code
    res.json(
      responseSchema<null>({
        code: res.statusCode,
        data: null,
        message: error?.message ?? STATUS_CONFLICT.message,
      })
    )
  } finally {
    res.end()
  }
}
