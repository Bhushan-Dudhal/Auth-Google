import express from "express"
import { googleApi } from "../controller/user.controler.js"



const router = express.Router()



router.post("/google", googleApi)

export default router