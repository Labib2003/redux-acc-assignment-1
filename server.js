const dotenv = require("dotenv").config();
const app = require("./index");
const dbConnect = require("./utils/dbConnect");
const port = process.env.PORT || 6969;

dbConnect();

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
