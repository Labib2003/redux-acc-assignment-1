/* const express = require("express"); */
const cors = require("cors");
const blogPostRoutes = require("./routes/blogPost.routes");

/* const app = express(); */
const app = require("./api/index");

app.use(express.json());
app.use(cors());

app.use("/api/v1/", blogPostRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello World!",
  });
});

/* module.exports = app; */
