import mongoose from "mongoose";
const BlogSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
});
const Blog = mongoose.model("Blog", BlogSchema);
export default Blog;
