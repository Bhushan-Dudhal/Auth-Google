import { User } from "../model/user.model.js"
import jwt from "jsonwebtoken"
import bcryptjs from "bcryptjs"


export const googleApi = async (req, res, next) => {

    console.log(req.body)
    try {

        const { name, email, password, profilePic } = req.body
        const existUser = await User.findOne({ email })

        if (existUser) {

            const { password, ...rest } = existUser._doc
            const token = jwt.sign({ _id: existUser._id }, process.env.SECRETKEY, {
                expiresIn: "1d",
            })


            return res
                .cookie("token", token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
                .status(200)
                .json({ success: true, messaage: `You login successfully ${name}` });
        }

        const createPass = Math.floor(Math.random() * 80000000 * 8000000000000).toString()

        const haspassword = bcryptjs.hashSync(createPass, 10)

        const newUser = await User.create({
            name, email, password: haspassword, profilePic
        })

        const { password: abc, ...rest } = newUser._doc
        const token = jwt.sign({ _id: newUser._id }, process.env.SECRETKEY, {
            expiresIn: "1d",
        })
        return res.cookie("token", token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }).status(200).json({ success: true, message: "User created success fully" }, rest)

    } catch (error) {
        console.log(`Error while Continue with google :${error}`)

    }
}