import express from 'express'

import { usersGet } from '@/modules'
import { USER_ROUTE } from '@/constants'

const usersRouter = express.Router()

usersRouter.put(`/${USER_ROUTE}`)
usersRouter.get(`/${USER_ROUTE}`, usersGet)
usersRouter.post(`/${USER_ROUTE}`)
usersRouter.delete(`/${USER_ROUTE}`)

export { usersRouter }
