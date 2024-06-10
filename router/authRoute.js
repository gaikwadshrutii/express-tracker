const { registerUser, loginUser } = require("../controller/authController")

const route = require("express").Router()

route
.post("/register", registerUser)
.post("/login", loginUser)
 module.exports = route