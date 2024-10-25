import express from 'express'

import { USER_ROUTE } from '@/constants'
import { usersGet, usersPut, usersPost, usersDelete } from '@/controllers'

const usersRouter = express.Router()

usersRouter.get(`/${USER_ROUTE}`, usersGet)
usersRouter.post(`/${USER_ROUTE}`, usersPost)
usersRouter.put(`/${USER_ROUTE}/:id`, usersPut)
usersRouter.delete(`/${USER_ROUTE}/:id`, usersDelete)

export { usersRouter }
