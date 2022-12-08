const {
  postNewBlogService,
  getAllBlogsService,
} = require("../services/blogPost.services");

module.exports.getAllPosts = async (req, res) => {
  try {
    const allBlogs = await getAllBlogsService();
    res.status(200).json({
      success: true,
      data: allBlogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.postNewBlog = async (req, res) => {
  try {
    const newBlogPost = await postNewBlogService(req.body);
    res.status(200).json({
      success: true,
      data: newBlogPost,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
