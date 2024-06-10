const User = require("../model/User")
const bcrypt = require("bcrypt")
exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const hash = await bcrypt.hash(password, 10)
        await User.create({ ...req.body, password: hash })
        res.json({ message: "register Success" })
    } catch (error) {
        res.status(400).json({ message: "Something Went Wrong", error: error.message })

    }

}
// dreams dont work unless you do
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const result = await User.findOne({ email })
        if (!result) {
            return res.status(404).json({ message: "Email Not Found" })
        }
        const verify = await bcrypt.compare(password, result.password)
        if (!verify) {
            return res.status(400).json({message: "Password Do Not Match"})
        }
        res.json({ message: "login Success" })
    } catch (error) {
        res.status(400).json({ message: "Something Went Wrong", error: error.message })

    }
}