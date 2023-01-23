const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.ehsradf.mongodb.net/?retryWrites=true&w=majority`;
mongoose.set('strictQuery', true);

const dbConnect = async () => {
  const res = await mongoose
    .connect(uri)
    .then(mongoose.connection)
    .catch((err) => console.log(err));
  console.log("Database connection successful.");
};

module.exports = dbConnect;
