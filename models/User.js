const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 1,
        maxLength: 100,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: 1,
        maxLength: 255,
        trim: true,
    },
    password: {
        type: String,
        minLength: 6,
        maxLength: 255,
        trim: true,
    },
});

userSchema.pre("save", async function (next) {
    const user = this;
    if (user.isModified("password")) {
        user.password = bcrypt.hash(user.password, 8);
    }

    next();
});

userSchema.virtual("url").get(function () {
    return `/users/${this.username}`;
});

module.exports = mongoose.model("User", userSchema);
