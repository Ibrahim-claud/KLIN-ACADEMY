const mongoose = require("mongoose");

//Schema for Db Document in Collection
const movieSchema = new mongoose.Schema({
  fullname: String, //this should be a String
  course: String, //this should be a String
  year: Number, //this should be a number
});

//Model Class Created from the Scema
const Movies = mongoose.model("Students", movieSchema); //Pascal Naming Convention because of the Class

module.exports = Movies;
