const express = require("express");
const mongoose = require("mongoose");
// const morgan = require("morgan");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const { requireAuth, checkUser } = require("./middleware/authMiddleware");
// const diaryRoutes = require("./routes/diaryRoutes");

const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set("view engine", "ejs");

// database connection
const dbURI = "mongodb://localhost/diaryweb";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// app.use(morgan("dev"));
//
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// routes
app.get("*", checkUser);
app.get("/", (req, res) => res.render("home"));
app.get("/create", requireAuth, (req, res) => res.render("create"));

//
// app.get("/", (req, res) => {
//   res.render("/diarys");
// });
app.use(authRoutes);

// route2
// app.use(diaryRoutes);

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
