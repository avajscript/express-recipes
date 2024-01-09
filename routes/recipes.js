const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const Recipe = require("../models/Recipe");
const recipe_controller = require('../controllers/RecipeController');

router.get(
    "/",
     recipe_controller.index
);

router.get(
    "/:id",
    recipe_controller.recipe_details
);

module.exports = router;
