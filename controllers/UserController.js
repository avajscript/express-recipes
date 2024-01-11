const asyncHandler = require("express-async-handler");
const User = require("../models/User");

exports.user_list = asyncHandler(async (req, res, next) => {
    const allUsers = await User.find().sort({ username: 1 }).exec();

    res.render("user_list", {
        title: "All Users",
        all_users: allUsers,
    });
});

exports.user_details = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: user details");
});

exports.user_create_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: user details");
});

exports.user_create_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: user details");
});

exports.user_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: user details");
});

exports.user_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: user details");
});

exports.user_deails = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: user details");
});

exports.user_deails = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: user details");
});

exports.user_deails = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: user details");
});

exports.user_deails = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: user details");
});
