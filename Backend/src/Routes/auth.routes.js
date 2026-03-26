const { Router } = require("express")
const { registerUserController } = require("../Controllers/auth.controllers")

const authRouter = Router()

authRouter.post('/register',registerUserController)