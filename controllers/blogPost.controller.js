const {
  postNewBlogService,
  getAllBlogsService,
  deleteBlogService,
  updateBlogService,
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

module.exports.updateBlog = async (req, res) => {
  const {
    params: { id },
    body,
  } = req;
  try {
    const response = await updateBlogService(id, body);
    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.deleteBlog = async (req, res) => {
  try {
    const response = await deleteBlogService(req.params.id);
    if (response.deletedCount) {
      res.status(200).json({
        success: true,
        data: response,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Could not find a post with the provided id.",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
