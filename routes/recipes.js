const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const Recipe = require("../models/Recipe");

router.get(
    "/",
    asyncHandler(async (req, res, next) => {
        const allRecipes = await Recipe.find().sort({ title: 1 }).exec();

        res.render("recipe_list", {
            title: "All Recipes",
            all_recipes: allRecipes,
        });
    }),
);

module.exports = router;
