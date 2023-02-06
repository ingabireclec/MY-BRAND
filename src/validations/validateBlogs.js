import Joi from "joi";
const blogSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.empty": "Title is required",
  }),
  description: Joi.string().required().messages({
    "string.empty": "Description is required",
  }),
  category: Joi.string().required().messages({
    "string.empty": "Category is required",
  }),
});
const validateBlog = (blogData) => {
  return blogSchema.validate(blogData);
};
export default validateBlog;
