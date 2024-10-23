import { Request, Response } from 'express'

import { responseSchema } from '@/utils'
import { db, usersTable } from '@/database'

export const usersGet = async (req: Request, res: Response) => {
  const response = await db.select().from(usersTable)

  res.json(
    responseSchema({
      code: 200,
      data: response,
      message: 'Get users success',
    })
  )
}
