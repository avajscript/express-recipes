const Recipe = require("../models/Recipe");
const asyncHandler = require("express-async-handler");

exports.recipe_list = asyncHandler(async (req, res, next) => {
    const recipes = await Recipe.find()
        .sort({ title: 1 })
        .populate("category")
        .exec();
    console.log("recipes");
    console.log(recipes);
    res.render("recipe_list", {
        title: "All Recipes",
        recipes: recipes,
    });
});

exports.recipe_details = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Recipe details");
});

exports.recipe_create_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Recipe details");
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
