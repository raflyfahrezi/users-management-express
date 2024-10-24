import { createInsertSchema } from 'drizzle-zod'
import { Request, Response } from 'express'

import { responseSchema } from '@/utils'
import { db, usersTable } from '@/database'

export const usersPost = async (req: Request, res: Response) => {
  const body = req.body

  const testBody = createInsertSchema(usersTable)
  const testResult = testBody.safeParse(body)

  if (!testResult.success) {
    res.json(
      responseSchema({
        code: res.statusCode,
        data: {},
        message: 'Input is unprocessable',
      })
    )

    return
  }

  await db.insert(usersTable).values({
    ...body,
  })

  res.json(
    responseSchema({
      code: res.statusCode,
      data: { ...body },
      message: 'Add users success',
    })
  )
}
