const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const app = express();

mongoose.connect("mongodb://localhost/recipes");
app.set("view", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(port, () => {});
console.log(`Server started on port: ${port}`);
