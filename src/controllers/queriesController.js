import Contact from "../models/Contact.js";
// const router = express.Router();
const httpCreateContact = async (req, res) => {
  try {
    const contact = new Contact(req, body);
    await contact.save();
    return res.status(201).json({
      success: true,
      message: "contact created successfully",
      contact,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal server error",
      error: error.message,
    });
  }
};
const httpDisplayContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    return res.status(201).json({
      success: true,
      message: "contact created successfully",
      contacts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal server error",
      error: error.message,
    });
  }
};

export default httpCreateContact;
httpDisplayContacts;
