const Diary = require("../models/diaryModel");

// diary index, blog details, blog-create, blog create-post, blog_delete

const diary_diarys = (req, res) => {
  Diary.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("diarys", { title: "all diary", diarys: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const diary_details = (req, res) => {
  const id = req.params.id;
  Diary.findById(id)
    .then((result) => {
      res.render("details", { diary: result, title: "Diary details" });
    })
    .catch((err) => {
      console.log(err);
    });
};
const diary_create_get = (req, res) => {
  res.render("create");
};

const diary_create_post = (req, res) => {
  const diary = new Diary(req.body);
  diary
    .save()
    .then((result) => {
      res.redirect("/diarys");
    })
    .catch((err) => {
      console.log(err);
    });
};

const diary_delete = (req, res) => {
  const id = req.params.id;
  Diary.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/diarys" });
    })
    .catch((err) => {
      console.log(err);
    });
};

// signup

module.exports = {
  diary_diarys,
  diary_details,
  diary_create_get,
  diary_create_post,
  diary_delete,
};
