const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const cors = require("cors")
const { logger } = require("./middlewares/logger")
mongoose.connect(process.env.MONGO_URL)

const app = express()
app.use(express.json())
app.use(cors())
app.use(logger)

app.use("/api/auth", require("./router/authRoute"))
app.use("/api/account", require("./router/accountRoute"))

app.use("*", (req, res) => {
    res.status(404).json({ message: "Resource Not Found" })
})
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: "server error", error: err.message })
})

mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED")
    app.listen(process.env.PORT, console.log("server running"))
})