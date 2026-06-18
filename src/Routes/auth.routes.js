const express = require("express");
const authcontroller = require("../controller/auth.controller")

const router = express.Router();



router.post("/ragister" , authcontroller.ragisterUser)

router.get("/login" , authcontroller.Login)

router.get("/logout" , authcontroller.logout)

module.exports = router; 