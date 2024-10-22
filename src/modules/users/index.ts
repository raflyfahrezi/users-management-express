import { Request, Response } from 'express'

import { responseSchema } from '@/utils'

export const usersGet = (req: Request, res: Response) => {
  res.json(
    responseSchema({
      code: 200,
      data: [],
      message: '',
    })
  )
}
