const Category = require("../models/Category");
const Recipe = require('../models/Recipe');
const asyncHandler = require("express-async-handler");

exports.category_list = asyncHandler(async (req, res, next) => {
  const categories = await Category.find().sort({name: 1 }).exec();

  res.render("category_list", {
      title: "All Categories",
      all_categories: categories
  });

});

exports.category_details = asyncHandler(async (req, res, next) => {
    const [category, categoryRecipes] = await Promise.all([
        Category.findById(req.params.id).exec(),
        Recipe.find({category: req.params.id}).sort("title").exec()
    ]);

    // if category not found
    if (category === null) {
        res.redirect("/categories");
    }

    res.render("category_detail", {
        title: "Category",
        category: category,
        category_recipes: categoryRecipes
    })
});

exports.category_create_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: category details");
});

exports.category_create_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: category details");
});

exports.category_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: category details");
});

exports.category_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: category details");
});

exports.category_deails = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: category details");
});

exports.category_deails = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: category details");
});

exports.category_deails = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: category details");
});

exports.category_deails = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: category details");
});
