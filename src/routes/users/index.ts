import express from 'express'

import { USER_ROUTE } from '@/constants'
import { usersGet, usersPost } from '@/controllers'

const usersRouter = express.Router()

usersRouter.put(`/${USER_ROUTE}`)
usersRouter.get(`/${USER_ROUTE}`, usersGet)
usersRouter.post(`/${USER_ROUTE}`, usersPost)
usersRouter.delete(`/${USER_ROUTE}`)

export { usersRouter }
