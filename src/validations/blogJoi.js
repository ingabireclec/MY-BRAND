import joi from "joi";
const blogSchema = joi.object({
  title: joi.string().required().messages({
    "string.empty": "Title is required",
  }),
  description: joi.string().required().messages({
    "string.empty": "Description is required",
  }),
  category: joi.string().required().messages({
    "string.empty": "Category is required",
  }),
});
const validateBlog = (blogData) => {
  return blogSchema.validate(blogData);
};
export default validateBlog;
