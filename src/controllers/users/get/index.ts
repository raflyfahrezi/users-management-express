import { Request, Response } from 'express'

import { responseSchema } from '@/utils'

import { getUsers } from './query'

export const usersGet = async (req: Request, res: Response) => {
  const response = await getUsers(req)

  res.json(
    responseSchema({
      code: 200,
      data: response,
      message: 'Get users success',
    })
  )
}
