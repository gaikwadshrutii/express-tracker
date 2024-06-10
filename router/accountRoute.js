const router = require("express").Router()
const { credit, debit } = require("../controller/accountController")


router
    .post("/credit", credit)
    .post("/debit", debit)
module.exports = router