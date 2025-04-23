const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

// Import entity routes
const postRoutes = require("./entities/post");
const commentRoutes = require("./entities/comment");
const productRoutes = require("./entities/product");
const cartRoutes = require("./entities/cart");
const newsLetterRoutes = require("./entities/newsLetter");

// Initialize Express
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Register entity routes
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/newsletter", newsLetterRoutes);
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// Deploy as a Firebase Cloud Function
exports.api = functions.https.onRequest(app);
