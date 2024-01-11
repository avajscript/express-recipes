const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");

exports.user_list = asyncHandler(async (req, res, next) => {
    const allUsers = await User.find().sort({ username: 1 }).exec();

    res.render("user_list", {
        title: "All Users",
        all_users: allUsers,
    });
});

exports.user_details = asyncHandler(async (req, res, next) => {
    const user = await User.findOne({ username: req.params.id }).exec();

    res.render("user_detail", {
        title: "View User",
        user: user,
    });
});

exports.user_create_get = asyncHandler(async (req, res, next) => {
    res.render("user_form", {
        title: "Create User",
    });
});

exports.user_create_post = [
    body("username", "Username must be specified")
        .trim()
        .isLength({ min: 1, max: 100 })
        .escape(),
    body("email", "Email must be in the format 'johndoe@gmail.com'")
        .trim()
        .isEmail()
        .escape(),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        // Try to find if that user exists based on username or password
        const userFind = await User.findOne({
            $or: [{ username: req.body.username }, { email: req.body.email }],
        });

        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        // Re-render the user form is validation error
        if (!errors.isEmpty()) {
            res.render("user_form", {
                title: "Create User",
                user: user,
                errors: errors.array(),
            });
        }
        // Re-render the user form if the user already exists
        if (userFind !== null) {
            res.render("user_form", {
                title: "Create User",
                user: user,
                errors: [
                    { msg: "User already exists with that username or email" },
                    ...errors.array(),
                ],
            });
        }

        await user.save();
        res.redirect(user.url);
    }),
];

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
