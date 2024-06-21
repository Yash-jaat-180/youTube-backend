import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

// Middleware 
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(express.json({
    limit: "16kb"
}))

app.use(express.urlencoded({
    extended: true, 
    limit: "16kb"
}))

app.use(express.static("public"))
app.use(cookieParser())


// Routes

import userRouter from "./routes/user.routes.js"
import videoRouter from './routes/video.routes.js'
import subscriptionRouter from './routes/subscription.routes.js'
import playlistRouter from './routes/playlist.routes.js'
import commentRouter from './routes/comment.routes.js'

// routes declarations
app.use("/api/v1/users", userRouter)
// http://localhost:8000/api/v1/users/register
// http://localhost:8000/api/v1/users/login
app.use("/api/v1/videos", videoRouter)
app.use("/api/v1/subscriptions", subscriptionRouter)
app.use("/api/v1/playlist", playlistRouter)
app.use("/api/v1/comments", commentRouter)

export { app }