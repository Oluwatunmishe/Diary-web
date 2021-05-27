const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const diarySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    date: { type: Date, Default: Date.now() },

  },
  { timestamps: true }
);

const Diary = mongoose.model("Diary", diarySchema);

module.exports = Diary;
