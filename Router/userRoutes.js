import express from 'express'
import { login, register } from '../Controllers/UserController.js'

const router=express.Router()
router.route('/').post(register)
router.route('/login').post(login)

export default router