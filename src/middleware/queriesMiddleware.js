import validateQueries from "../validations/validateQueries";
const isValid = (req, res, next) => {
  const { error } = validateQueries(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  try {
    next();
  } catch (error) {
    console.log("something went wrong");
  }
};
export default isValid;
