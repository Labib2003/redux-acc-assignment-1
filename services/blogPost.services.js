const BlogPost = require("../models/BlogPost");

module.exports.getAllBlogsService = () => {
  return BlogPost.find({});
};

module.exports.postNewBlogService = (data) => {
  const newBlogPost = new BlogPost(data);
  return newBlogPost.save();
};

module.exports.updateBlogService = (id, data) => {
  return BlogPost.updateOne(
    { _id: id },
    { $set: data },
    { runValidators: true }
  );
};

module.exports.deleteBlogService = (id) => {
  return BlogPost.deleteOne({ _id: id });
};
