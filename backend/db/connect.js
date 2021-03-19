const mongoose = require("mongoose");
const prod_uri =
  "mongodb+srv://schooladmin:School1234@cluster0.po1om.mongodb.net/Academy?retryWrites=true&w=majority";
const dev_uri = "mongodb://localhost:27017/Academy";

const dbConnect = async () => {
  await mongoose
    .connect(prod_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }) //This is the Connection String.
    .then(() => console.log("Connected to MongoDB")) //The connect method returns a Promise. If it's fulfilled, It does this.
    .catch((err) => console.log("Failed to connect to MongoDB...", err));
};

dbConnect();

module.exports.Connect = dbConnect;
