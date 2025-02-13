import clientPromise from "@/utils/db";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("learnica"); // Replace with your database name
  const { id } = req.query;

  if (req.method === "PUT") {
    try {
      const updateData = req.body;
      const result = await db
        .collection("comments")
        .updateOne({ _id: new ObjectId(id) }, { $set: updateData });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: "Failed to update comment" });
    }
  } else if (req.method === "DELETE") {
    try {
      const result = await db.collection("comments").deleteOne({ _id: new ObjectId(id) });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: "Failed to delete comment" });
    }
  } else {
    res.setHeader("Allow", ["PUT", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
