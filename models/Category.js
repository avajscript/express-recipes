const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLength: 1,
        maxLength: 100,
    },
    description: {
        type: String,
        maxLength: 1000,
    },
    imageUrl: {
        type: String,
    },
});

const Category = new mongoose.model("Category", categorySchema);

module.exports = Category;
