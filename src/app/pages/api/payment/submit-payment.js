// pages/api/submit-payment.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Add your MongoDB connection string in .env
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { transactionId, email } = req.body;

    if (!transactionId || !email) {
      return res.status(400).json({ message: "Transaction ID and email are required" });
    }

    try {
      await client.connect();
      const database = client.db("grammar-payments"); // Replace with your database name
      const payments = database.collection("transactions"); // Replace with your collection name

      // Save the transaction ID and email with a pending status
      const result = await payments.insertOne({
        transactionId,
        email,
        status: "pending",
        createdAt: new Date(),
      });

      res.status(200).json({ message: "Payment request submitted successfully", result });
    } catch (error) {
      console.error("Error saving payment request:", error);
      res.status(500).json({ message: "Failed to submit payment request", error });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}