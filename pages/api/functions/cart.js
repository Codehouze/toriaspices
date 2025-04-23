// const express = require("express");
// const { db, admin } = require("../config/firebase");

// const router = express.Router();

// // Helper function to get product details (e.g., price)
// const getProductDetails = async (productId) => {
//   const productDoc = await admin
//     .firestore()
//     .collection("products")
//     .doc(productId)
//     .get();
//   if (!productDoc.exists) {
//     throw new Error("Product not found");
//   }
//   return productDoc.data();
// };

// // Add item to cart
// router.post("/", async (req, res) => {
//   const { userId, productId, quantity } = req.body;

//   // Input validation
//   if (!userId || !productId || !quantity || quantity <= 0) {
//     return res.status(400).json({ message: "Invalid input data" });
//   }

//   try {
//     const product = await getProductDetails(productId);

//     const cartRef = admin.firestore().collection("carts").doc(userId);
//     const cartDoc = await cartRef.get();

//     let cart = cartDoc.exists ? cartDoc.data() : { items: {} };

//     if (cart.items[productId]) {
//       cart.items[productId].quantity += quantity;
//     } else {
//       cart.items[productId] = { quantity };
//     }

//     await cartRef.set(cart);
//     return res.status(200).json({ message: "Item added to cart", cart });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: error.message });
//   }
// });

// // Get user's cart
// router.get("/", async (req, res) => {
//   const { userId } = req.query;

//   if (!userId) {
//     return res.status(400).json({ message: "User ID is required" });
//   }

//   try {
//     const cartDoc = await admin
//       .firestore()
//       .collection("carts")
//       .doc(userId)
//       .get();

//     if (!cartDoc.exists) {
//       return res.status(200).json({ items: {} });
//     }

//     return res.status(200).json(cartDoc.data());
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: error.message });
//   }
// });

// // Remove item from cart
// router.delete("/", async (req, res) => {
//   const { userId, productId } = req.body;

//   if (!userId || !productId) {
//     return res
//       .status(400)
//       .json({ message: "User ID and Product ID are required" });
//   }

//   try {
//     const cartRef = admin.firestore().collection("carts").doc(userId);
//     const cartDoc = await cartRef.get();

//     if (!cartDoc.exists) {
//       return res.status(404).json({ message: "Cart not found" });
//     }

//     let cart = cartDoc.data();
//     delete cart.items[productId];

//     await cartRef.set(cart);
//     return res.status(200).json({ message: "Item removed from cart", cart });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: error.message });
//   }
// });

// // Checkout - Place order and clear cart
// router.post("/checkout", async (req, res) => {
//   const { userId } = req.body;

//   if (!userId) {
//     return res.status(400).json({ message: "User ID is required" });
//   }

//   try {
//     const cartRef = admin.firestore().collection("carts").doc(userId);
//     const cartDoc = await cartRef.get();

//     if (!cartDoc.exists || !Object.keys(cartDoc.data().items).length) {
//       return res.status(400).json({ message: "Cart is empty" });
//     }

//     const items = cartDoc.data().items;
//     let total = 0;

//     // Fetch product details for total calculation
//     for (const productId in items) {
//       const product = await getProductDetails(productId);
//       total += product.price * items[productId].quantity;
//     }

//     const order = {
//       userId,
//       items,
//       total,
//       status: "pending",
//       createdAt: admin.firestore.FieldValue.serverTimestamp(),
//     };

//     // Save order
//     await admin.firestore().collection("orders").add(order);

//     // Clear cart
//     await cartRef.delete();

//     return res
//       .status(200)
//       .json({ message: "Order placed successfully", order });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;
