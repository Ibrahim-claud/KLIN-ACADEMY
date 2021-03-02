const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dbconnect = async () => {
  await mongoose
    .connect(
      "mongodb+srv://schooladmin:School1234@cluster0.po1om.mongodb.net/Academy?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    )
    .then(() => console.log("connected to mongoose ... "))
    .catch((error) => console.error("Error", error));
};

dbconnect();

const schoolSchema = new Schema({
  firstName: {
    type: String,
  },

  lastName: {
    type: String,
  },

  cousre: {
    type: String,
  },
});

const School = mongoose.model("Students", schoolSchema);

module.exports = School;
