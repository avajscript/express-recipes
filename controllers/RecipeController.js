const Recipe = require("../models/Recipe");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
    const recipes = await Recipe.find()
        .populate("category")
        .sort({ title: 1 })
        .exec();
    res.render("recipe_list", {
        title: "All Recipes",
        all_recipes: recipes,
    });
});

exports.recipe_details = asyncHandler(async (req, res, next) => {
    const recipe = await Recipe.findById(req.params.id)
        .populate("category")
        .sort({ title: 1 })
        .exec();

    // Recipe cannot be found
    if (recipe === null) {
        res.redirect("/recipes");
    }

    res.render("recipe_detail", {
        title: "Recipe",
        recipe: recipe
    });
});

exports.recipe_create_get = asyncHandler(async (req, res, next) => {
    res.render("recipe_create", {
       title: "Create recipe"
    });
});

exports.recipe_create_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Recipe details");
});

exports.recipe_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Recipe details");
});

exports.recipe_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Recipe details");
});

exports.recipe_deails = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Recipe details");
});

exports.recipe_deails = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Recipe details");
});

exports.recipe_deails = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Recipe details");
});

exports.recipe_deails = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Recipe details");
});
