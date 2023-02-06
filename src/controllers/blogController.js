import express from "express";
import Blog from "../models/Blog.js";
import { uploadImage } from "../services/cloudinary.js";
import validateBlog from "../validations/validateBlogs.js";
import fs from "fs";

export const httpCreateBlog = async (req, res) => {
  try {
    const { file } = req;
    if (!file) {
      return res.status(400).json({
        success: false,
        message: "No image provided",
      });
    }

    const path = req.file.path;
    const image = await uploadImage(path, "blogs");
    fs.unlinkSync(path);

    const blog = new Blog({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      image: image.url,
    });

    await blog.save();
    return res.status(201).json({
      success: true,
      message: "Blog created successfully",
      blog,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const httpDisplayBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();
    return res.json(blogs);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const httpUpdateBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({ _id: req.params.id });
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog doesn't exist!",
      });
    }

    if (req.body.title) {
      blog.title = req.body.title;
    }
    if (req.body.description) {
      blog.description = req.body.description;
    }
    if (req.body.category) {
      blog.category = req.body.category;
    }
    await blog.save();
    return res.json({
      success: true,
      message: "Blog updated successfully",
      blog,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const httpDeleteBlog = async (req, res) => {
  try {
    await Blog.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Blog doesn't exist!" });
  }
};
