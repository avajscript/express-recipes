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

module.exports = mongoose.model("Category", categorySchema);
