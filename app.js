const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
// used to enable environment variables in .env
require("dotenv").config();
const port = process.env.PORT || 3000;
const app = express();

// Routes
const indexRouter = require("./routes/index");
const categoriesRouter = require("./routes/categories");
const usersRouter = require("./routes/users");
const recipesRouter = require("./routes/recipes");
// connect to database
mongoose.connect(process.env.MONGO_CONN);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/categories", categoriesRouter);
app.use("/recipes", recipesRouter);
app.listen(port, () => {});
console.log(`Server started on port: ${port}`);
