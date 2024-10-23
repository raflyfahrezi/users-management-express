import { z } from 'zod'
import { Request, Response } from 'express'

import { responseSchema } from '@/utils'
import { db, usersTable } from '@/database'

export const usersPost = async (req: Request, res: Response) => {
  const body = req.body

  //   const response = await db.insert(usersTable).values({
  //     name: 'Farhan',
  //     email: 'raflyfahr15@gmail.com',
  //   })

  res.json(
    responseSchema({
      code: 200,
      data: {},
      message: 'Add users success',
    })
  )
}
