const express = require("express");
const {
  getAllPosts,
  postNewBlog,
} = require("../controllers/blogPost.controller");

const router = express.Router();

router.route("/blogs").get(getAllPosts).post(postNewBlog);

module.exports = router;
