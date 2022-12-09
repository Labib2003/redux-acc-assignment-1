const mongoose = require("mongoose");

const blogPostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for your post."],
      trim: true,
    },
    body: {
      type: String,
      required: [true, "Please provide a body for your post."],
    },
    tags: {
      type: [String],
      enum: ["JavaScript", "React", "Other"],
    },
  },
  {
    timestamps: true,
  }
);

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

module.exports = BlogPost;
