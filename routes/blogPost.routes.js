const express = require("express");
const {
  getAllPosts,
  postNewBlog,
  deleteBlog,
  updateBlog,
} = require("../controllers/blogPost.controller");

const router = express.Router();

router.route("/blogs").get(getAllPosts).post(postNewBlog);
router.route("/blogs/:id").patch(updateBlog).delete(deleteBlog);

module.exports = router;
