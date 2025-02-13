import clientPromise from "@/utils/db";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("learnwithnuman"); // Replace with your database name

  if (req.method === "GET") {
    try {
      const comments = await db.collection("comments").find({}).toArray();
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch comments" });
    }
  } else if (req.method === "POST") {
    try {
      const newComment = req.body;
      const result = await db.collection("comments").insertOne(newComment);
      res.status(201).json(result.ops[0]); // Return the newly created comment
    } catch (error) {
      res.status(400).json({ error: "Failed to add comment" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
