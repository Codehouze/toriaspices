// const express = require("express");
// const { db, admin } = require("../config/firebase");

// const router = express.Router();

// // Create Product
// router.post("/", async (req, res) => {
//   try {
//     const { name, description, price, stock, imageUrl } = req.body;
//     if (!name || !description || !price || stock === undefined) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     const newProduct = await db.collection("products").add({
//       name,
//       description,
//       price: parseFloat(price),
//       stock: parseInt(stock),
//       imageUrl: imageUrl || "",
//       createdAt: admin.firestore.FieldValue.serverTimestamp(),
//     });

//     res
//       .status(201)
//       .json({ id: newProduct.id, message: "Product created successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Get All Products
// router.get("/", async (req, res) => {
//   try {
//     const snapshot = await db
//       .collection("products")
//       .orderBy("createdAt", "desc")
//       .get();
//     const products = snapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Get a Single Product by ID
// router.get("/:id", async (req, res) => {
//   try {
//     const productDoc = await db.collection("products").doc(req.params.id).get();
//     if (!productDoc.exists) {
//       return res.status(404).json({ error: "Product not found" });
//     }
//     res.status(200).json({ id: productDoc.id, ...productDoc.data() });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Update Product
// router.put("/:id", async (req, res) => {
//   try {
//     const { name, description, price, stock, imageUrl } = req.body;
//     const updates = {
//       ...(name && { name }),
//       ...(description && { description }),
//       ...(price && { price: parseFloat(price) }),
//       ...(stock !== undefined && { stock: parseInt(stock) }),
//       ...(imageUrl && { imageUrl }),
//       updatedAt: admin.firestore.FieldValue.serverTimestamp(),
//     };

//     await db.collection("products").doc(req.params.id).update(updates);
//     res.status(200).json({ message: "Product updated successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Delete Product
// router.delete("/:id", async (req, res) => {
//   try {
//     await db.collection("products").doc(req.params.id).delete();
//     res.status(200).json({ message: "Product deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;
