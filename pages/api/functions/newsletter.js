const express = require("express");
const nodemailer = require("nodemailer");
const { admin } = require("../config/firebase");

const router = express.Router();

// Helper function to send email (you can replace this with SendGrid or another service)
const sendNewsletterEmail = async (subject, content) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // Replace with your email service or API (e.g., SendGrid)
    auth: {
      user: "your-email@gmail.com", // Your email
      pass: "your-email-password", // Your email password or app-specific password
    },
  });

  const subscribersSnapshot = await admin
    .firestore()
    .collection("subscribers")
    .get();
  const emails = subscribersSnapshot.docs.map((doc) => doc.data().email);

  if (emails.length === 0) {
    throw new Error("No subscribers found");
  }

  const mailOptions = {
    from: "your-email@gmail.com",
    to: emails.join(", "), // Sending to all subscribers
    subject,
    html: content, // HTML content for the newsletter
  };

  return transporter.sendMail(mailOptions);
};

// 1. Subscribe to the newsletter
router.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    // Check if the email already exists in the subscribers collection
    const snapshot = await admin
      .firestore()
      .collection("subscribers")
      .where("email", "==", email)
      .get();

    if (!snapshot.empty) {
      return res.status(400).json({ message: "You are already subscribed" });
    }

    // Add the new subscriber to Firestore
    await admin.firestore().collection("subscribers").add({
      email,
      subscribedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return res
      .status(200)
      .json({ message: "Successfully subscribed to the newsletter" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});

// 2. List all subscribers (for admin view)
router.get("/subscribers", async (req, res) => {
  try {
    const snapshot = await admin.firestore().collection("subscribers").get();
    const subscribers = snapshot.docs.map((doc) => doc.data());

    return res.status(200).json({ subscribers });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});

// 3. Send Newsletter to all subscribers
router.post("/send-newsletter", async (req, res) => {
  const { subject, content } = req.body;

  if (!subject || !content) {
    return res
      .status(400)
      .json({ message: "Subject and content are required" });
  }

  try {
    await sendNewsletterEmail(subject, content);
    return res.status(200).json({ message: "Newsletter sent successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
