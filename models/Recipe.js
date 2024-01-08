const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({});

const recipeSchema = new mongoose.Model({
    title: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100,
    },
    description: {
        type: String,
    },
    ingredients: [{ type: String, required: true }],
    instructions: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
