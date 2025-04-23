// const express = require("express");
// const { db, admin } = require("../config/firebase");

// const router = express.Router();

// // Create Comment
// router.post("/", async (req, res) => {
//   try {
//     const { postId, author, content } = req.body;
//     if (!postId || !author || !content) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     const newComment = await db.collection("comments").add({
//       postId,
//       author,
//       content,
//       createdAt: admin.firestore.FieldValue.serverTimestamp(),
//     });

//     res
//       .status(201)
//       .json({ id: newComment.id, message: "Comment added successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Get Comments for a Post
// router.get("/post/:postId", async (req, res) => {
//   try {
//     const snapshot = await db
//       .collection("comments")
//       .where("postId", "==", req.params.postId)
//       .orderBy("createdAt", "desc")
//       .get();
//     const comments = snapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     res.status(200).json(comments);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Delete a Comment
// router.delete("/:id", async (req, res) => {
//   try {
//     await db.collection("comments").doc(req.params.id).delete();
//     res.status(200).json({ message: "Comment deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;
