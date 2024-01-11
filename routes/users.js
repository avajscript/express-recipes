const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/UserController");

router.get("/", user_controller.user_list);

module.exports = router;
