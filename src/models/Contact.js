import mongoose from "mongoose";
const ContactSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
});
const Contact = mongoose.model("Contact", BlogSchema);
export default Contact;
