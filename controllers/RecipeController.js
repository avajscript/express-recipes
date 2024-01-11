const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");
const Recipe = require("../models/Recipe");
const Category = require("../models/Category");

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
        recipe: recipe,
    });
});

exports.recipe_create_get = [
    asyncHandler(async (req, res, next) => {
        const categories = await Category.find().sort({ name: 1 }).exec();

        res.render("recipe_form", {
            title: "Create recipe",
            categories: categories,
        });
    }),
];

exports.recipe_create_post = [
    body("title", "Title must be specified")
        .trim()
        .isLength({ min: 1 })
        .escape(),
    body("category", "Category must not be empty")
        .trim()
        .isLength({ min: 1 })
        .escape(),
    body("instructions", "Instructions must not be empty")
        .trim()
        .isLength({ min: 1 })
        .escape(),
    body("description", "Description must not be empty")
        .trim()
        .isLength({ min: 1 })
        .escape(),
    body("ingredients").trim().escape(),
    asyncHandler(async (req, res, next) => {
        // Extract the errors in form submission
        const errors = validationResult(req);
        // get array of ingredints from comma seperated string "apple, carrot..."
        let ingredients = req.body.ingredients.split(",");
        ingredients = ingredients.map((ingredient) => {
            return ingredient.trim();
        });

        const recipe = new Recipe({
            title: req.body.title,
            category: req.body.category,
            description: req.body.description,
            instructions: req.body.instructions,
            ingredients: ingredients,
        });

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/error messages

            // Get all categories for form
            const all_categories = await Category.find()
                .sort({ name: 1 })
                .exec();
            ingredients = ingredients.join(", ");
            recipe.ingredients = ingredients;
            res.render("recipe_form", {
                title: "Create Recipe",
                recipe: recipe,
                categories: all_categories,
                ingredients: ingredients,
                errors: errors.array(),
            });
        } else {
            await recipe.save();
            res.redirect(recipe.url);
        }
    }),
];

exports.recipe_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Recipe details");
});

exports.recipe_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Recipe details");
});

exports.recipe_update_get = asyncHandler(async (req, res, next) => {
    const [recipe, allCategories] = await Promise.all([
        Recipe.findById(req.params.id),
        Category.find().sort({ name: 1 }).exec(),
    ]);

    // Recipe not found
    if (recipe === null) {
        res.redirect("/recipes");
    }

    res.render("recipe_form", {
        title: "Update Recipe",
        recipe: recipe,
        categories: allCategories,
    });
});

exports.recipe_update_post = [
    body("title", "Title must be specified")
        .trim()
        .isLength({ min: 1 })
        .escape(),
    body("category", "Category must not be empty")
        .trim()
        .isLength({ min: 1 })
        .escape(),
    body("instructions", "Instructions must not be empty")
        .trim()
        .isLength({ min: 1 })
        .escape(),
    body("description", "Description must not be empty")
        .trim()
        .isLength({ min: 1 })
        .escape(),
    body("ingredients").trim().escape(),
    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);
        let ingredients = req.body.ingredients
            .split(", ")
            .map((ingredient) => ingredient.trim());

        const recipe = new Recipe({
            title: req.body.title,
            category: req.body.category,
            instructions: req.body.instructions,
            description: req.body.description,
            ingredients: ingredients,
            _id: req.params.id,
        });

        // Error in form validation
        if (!errors.isEmpty()) {
            // Get all categories for form
            const categories = await Category.find().sort({ name: 1 }).exec();
            res.render("recipe_form", {
                title: "Update Recipe",
                recipe: recipe,
                categories: categories,
                errors: errors.array(),
            });
            return;
        } else {
            // Data from form is valid. Update the record
            const updatedRecipe = await Recipe.findByIdAndUpdate(
                req.params.id,
                recipe,
                {},
            );
            // Redirect to recipe detail page
            res.redirect(updatedRecipe.url);
        }
    }),
];

exports.recipe_deails = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Recipe details");
});
