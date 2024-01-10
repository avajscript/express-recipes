const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const recipe_controller = require('../controllers/RecipeController');

router.get(
    "/",
     recipe_controller.index
);

router.get(
    "/:id",
    recipe_controller.recipe_details
);

router.get("/create", recipe_controller.recipe_create_get);

module.exports = router;
