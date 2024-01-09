const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const Recipe = require("../models/Recipe");

// GET home page
router.get(
    "/",
    asyncHandler(async (req, res, next) => {
        res.render("index", {
            title: "Home Page",
        });
    }),
);

module.exports = router;
