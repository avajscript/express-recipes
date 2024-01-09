const mongoose = require("mongoose");
const Category = require('./Category');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
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
        type: Schema.Types.ObjectId,
        ref: "User",
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

recipeSchema.virtual("url").get(function () {
    return `/recipes/${this._id}`;
});

module.exports = mongoose.model("Recipe", recipeSchema);
