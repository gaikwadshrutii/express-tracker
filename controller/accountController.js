const asyncHandler = require("express-async-handler")
const Account = require("../model/Account")

exports.credit = asyncHandler(async (req, res) => {
    // try {
        await Account.create({...req.body, type: "credit"})
        res.json({ message: "Account Credit Success" })
    // } catch (error) {
    //     res.status(400).json({ message: "Something Went Wrong", error: error.message })

    // }
})

exports.debit = asyncHandler(async (req, res) => {
        await Account.create({...req.body, type: "debit"})
        res.json({ message: "Account Debit Success" }) 
})