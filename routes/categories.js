const express = require("express");
const router = express.Router();
const category_controller = require("../controllers/CategoryController");

router.get("/", category_controller.category_list);

router.get("/:id", category_controller.category_details);
module.exports = router;
