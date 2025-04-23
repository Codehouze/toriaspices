const express = require("express");
const { db, admin } = require("../config/firebase");

const router = express.Router();

// Create Post
router.post("/", async (req, res) => {
  try {
    const { title, content, author } = req.body;
    if (!title || !content || !author) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newPost = await db.collection("posts").add({
      title,
      content,
      author,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    res
      .status(201)
      .json({ id: newPost.id, message: "Post created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Posts
router.get("/", async (req, res) => {
  try {
    const snapshot = await db
      .collection("posts")
      .orderBy("createdAt", "desc")
      .get();
    const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a Single Post
router.get("/:id", async (req, res) => {
  try {
    const postDoc = await db.collection("posts").doc(req.params.id).get();
    if (!postDoc.exists) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json({ id: postDoc.id, ...postDoc.data() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Post
router.put("/:id", async (req, res) => {
  try {
    const { title, content, author } = req.body;
    await db.collection("posts").doc(req.params.id).update({
      title,
      content,
      author,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    res.status(200).json({ message: "Post updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete Post
router.delete("/:id", async (req, res) => {
  try {
    await db.collection("posts").doc(req.params.id).delete();
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
