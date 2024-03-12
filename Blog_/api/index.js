import express from "express";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import cookieParser from "cookie-parser"
import multer from "multer";



const app = express()

app.use(express.json())
app.use(cookieParser())

const upload = multer({ dest: './uploads/' })

app.post('/api/upload', upload.single('file'), function (req, res) {
    res.status(200).json("Image has been uploaded.")
})


app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)


const port = process.argv.slice(2)[0] || 8800;

app.listen(port, () => {
    console.log(`Connected! Server is running on port ${port}`);
});