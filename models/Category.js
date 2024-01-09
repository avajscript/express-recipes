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

categorySchema.virtual("url").get(function () {
    return `/categories/${this._id}`;
});

module.exports = mongoose.model("Category", categorySchema);
