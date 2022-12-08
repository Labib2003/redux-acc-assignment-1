const BlogPost = require("../models/BlogPost");

module.exports.getAllBlogsService = () => {
    return BlogPost.find({});
}

module.exports.postNewBlogService = (data) => {
  const newBlogPost = new BlogPost(data);
  return newBlogPost.save();
};
