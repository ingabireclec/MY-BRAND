import express from "express";
import Contact from "../models/Contact.js";
import validateQueries from "../validations/validateQueries.js";

const httpCreateContact = async (req, res) => {
  const { error } = validateQueries(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
      error: error.details,
    });
  }

  try {
    const contact = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
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
      message: "contacts retrieved successfully",
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

export default {
  httpCreateContact,
  httpDisplayContacts,
};
