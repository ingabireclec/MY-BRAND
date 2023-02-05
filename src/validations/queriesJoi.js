import Joi from "joi";
const contactSchema = joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Name is required",
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Invalid email address",
  }),
  message: Joi.string().required().messages({
    "string.empty": "Message is required",
  }),
});
const validateQueries = (contactData) => {
  return contactSchema.validate(contactData);
};
export default validateQueries;
