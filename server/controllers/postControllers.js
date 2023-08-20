import Posts from "../models/Posts.js";

export const getPost = async (req, res) => {
  try {
    const posts = await Posts.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
export const createPost = async (req, res) => {
  try {
    const body = req.body;
    const newPost = new Posts(body);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
