import express from "express"
import passport from "passport"
import cookieParser from "cookie-parser"
import authRouter from "../auth/auth.routes.js"
import "../auth/google.js"
import userRouter from "./route/profile.route.js"


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(passport.initialize())
app.use(express.static("public"))

app.get("/", () => {
    res.send("hello")
})


app.use("/user", userRouter)

app.use("/auth", authRouter);



export {app}