const BlogPost = require("../models/BlogPost");

module.exports.getAllBlogsService = () => {
  return BlogPost.find({});
};

module.exports.postNewBlogService = (data) => {
  return new BlogPost(data).save();
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
