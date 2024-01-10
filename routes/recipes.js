const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const recipe_controller = require('../controllers/RecipeController');

router.get(
    "/",
     recipe_controller.index
);

router.get("/create", recipe_controller.recipe_create_get);

router.get(
    "/:id",
    recipe_controller.recipe_details
);


module.exports = router;
