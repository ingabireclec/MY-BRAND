import express from "express";
import Blog from "../models/Blog.js";
import validateBlog from "../validations/blogJoi.js";
const router = express.Router();

export const httpCreateBlog = async (req, res) => {
  try {
    const blog = new Blog(req, body);
    await blog.save();
    return res.status(201).json({
      success: true,
      message: "blog created successfully",
      blog,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal server error",
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
      message: "internal server error",
      error: error.message,
    });
  }
};
export const httpUpdateBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({ _id: req.params.id });
    if (req.body.title) {
      blog.title = req.body.title;
    }
    if (req.body.description) {
      blog.description = req.body.description;
    }
    if (req.body.categorty) {
      blog.category = req.body.category;
    }
    await blog.save();
    res.send(blog);
  } catch {
    res.status(404);
    res.send({ error: "Blog doesn't exist!" });
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

// router.get("/blogs", async (req, res) => {
//
//   res.json(blogs);
// });

// router.post("/blogs", async (req, res) => {
//   const blog = new Blog({
//     title: req.body.title,
//     description: req.body.description,
//     category: req.body.category,
//   });
//   await blog.save();
//   res.send(blog);
// });

// router.get("/blogs/:id", async (req, res) => {
//   try {
//     const blog = await Blog.findOne({ _id: req.params.id });
//     res.send(blog);
//   } catch {
//     res.status(404);
//     res.send({ error: "Blog doesn't exist!" });
//   }
// });

// router.patch("/blogs/:id", async (req, res) => {
//   try {
//     const blog = await Blog.findOne({ _id: req.params.id });
//     if (req.body.title) {
//       blog.title = req.body.title;
//     }
//     if (req.body.description) {
//       blog.description = req.body.description;
//     }
//     if (req.body.categorty) {
//       blog.category = req.body.category;
//     }
//     await blog.save();
//     res.send(blog);
//   } catch {
//     res.status(404);
//     res.send({ error: "Blog doesn't exist!" });
//   }
// });

// router.delete("/blogs/:id", async (req, res) => {
//   try {
//     await Blog.deleteOne({ _id: req.params.id });
//     res.status(204).send();
//   } catch {
//     res.status(404);
//     res.send({ error: "Blog doesn't exist!" });
//   }
// });

// module.exports = router;
