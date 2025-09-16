import express from "express"
import "dotenv/config"
import mongoose from "mongoose"
import cookieparser from "cookie-parser"
import userrouter from "./router/user.routes.js"
import cors from "cors"
const app = express()

app.use(express.json())
app.use(cookieparser())

mongoose.connect(process.env.MONGODB_URL, { dbName: "Google" }).then(() => console.log("database connected success full")).catch((e) => console.log(`Error while database connection :${e}`))
app.use(cors())

app.use("/api/user", userrouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})