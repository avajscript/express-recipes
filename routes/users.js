const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/UserController");

router.get("/", user_controller.user_list);

router.get("/create", user_controller.user_create_get);
router.post("/create", user_controller.user_create_post);

router.get("/:id", user_controller.user_details);

module.exports = router;
