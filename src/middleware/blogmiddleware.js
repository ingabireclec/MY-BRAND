import validateBlog from "../validations/validateBlogs.js";
const isValid = (req, res, next) => {
  const { error } = validateBlog(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  try {
    next();
  } catch (error) {
    console.log("something went wrong");
  }
};
export default isValid;
