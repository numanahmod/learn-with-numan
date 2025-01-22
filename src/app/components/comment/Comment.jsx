import React, { useState } from "react";

const Comment = () => {
  const [comments, setComments] = useState([
    { text: "This lesson was incredibly helpful! The explanation of tenses was clear and easy to follow." },
    { text: "I learned a lot from this video, especially on parts of speech. Highly recommended!" },
  ]);
  const [comment, setComment] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComments = [...comments, { text: comment }];
      setComments(newComments);
      setHighlightedIndex(newComments.length - 1); // Highlight the latest comment
      setComment("");
    }
  };

  return (
    <div>
      {/* Comment Section */}
      <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h3>
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-sm ${
                highlightedIndex === index
                  ? "bg-yellow-100 border border-yellow-500"
                  : "bg-gray-100"
              }`}
            >
              <p className="text-lg text-gray-700">{comment.text}</p>
            </div>
          ))}
        </div>

        <h4 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Add a comment:</h4>
        <form onSubmit={handleAddComment} className="space-y-4">
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg text-black"
            rows="4"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Your comment..."
          />
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!comment.trim()} // Disable the button if no input
              className={`py-2 px-4 rounded-lg ${
                comment.trim()
                  ? "bg-blue-600 text-white cursor-pointer"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comment;
