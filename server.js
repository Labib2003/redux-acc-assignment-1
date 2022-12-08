const dotenv = require("dotenv");

const app = require("./index");
const port = process.env.PORT || 6969;

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
