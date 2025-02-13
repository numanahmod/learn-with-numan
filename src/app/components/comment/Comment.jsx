import React, { useState, useEffect } from "react";
import { GoPaperAirplane } from "react-icons/go";
import Swal from "sweetalert2";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { formatDistanceToNow } from "date-fns";
import { FaRegThumbsUp } from "react-icons/fa"; // Only keeping the like icon for now

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Firebase Authentication
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setUser({
          name: user.displayName || "Anonymous",
          photoURL: user.photoURL || "https://www.example.com/default-profile.png", // Use default image if no photo is available
          id: user.uid, // Store Firebase user ID to track likes
        });
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleAddComment = (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      Swal.fire({
        title: "Sign in required",
        text: "You need to sign in to post a comment.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Go to Sign In",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          const currentPath = window.location.pathname;
          window.location.href = `/login?returnUrl=${encodeURIComponent(currentPath)}`;
        }
      });
      return;
    }

    if (comment.trim()) {
      const newComment = {
        userName: user.name,
        userPhoto: user.photoURL,
        text: comment,
        time: new Date(),
        reactions: {
          like: 0,
        },
        likedBy: [], // Store users who liked the comment
        replies: [],
        showReplyForm: false,
      };
      const newComments = [...comments, newComment];
      setComments(newComments);
      setHighlightedIndex(newComments.length - 1);
      setComment("");
    }
  };

  const handleReaction = (index) => {
    if (!isAuthenticated) {
      Swal.fire({
        title: "Sign in required",
        text: "You need to sign in to like a comment.",
        icon: "warning",
        confirmButtonText: "Go to Sign In",
      });
      return;
    }

    const updatedComments = [...comments];
    const comment = updatedComments[index];

    if (comment.likedBy.includes(user.id)) {
      // If the user has already liked the comment, undo the like
      comment.reactions.like -= 1;
      comment.likedBy = comment.likedBy.filter((id) => id !== user.id);
    } else {
      // Otherwise, add the like and user ID to the likedBy array
      comment.reactions.like += 1;
      comment.likedBy.push(user.id);
    }

    setComments(updatedComments);
  };

  const handleAddReply = (index, replyText) => {
    if (replyText.trim()) {
      const updatedComments = [...comments];
      updatedComments[index].replies.push({
        userName: user.name,
        userPhoto: user.photoURL,
        text: replyText,
        time: new Date(),
      });
      updatedComments[index].showReplyForm = false; // Hide reply form after submitting
      setComments(updatedComments);
    }
  };

  const toggleReplyForm = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].showReplyForm = !updatedComments[index].showReplyForm;
    setComments(updatedComments);
  };

  return (
    <div>
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
              <div className="flex items-center space-x-4 mb-3">
                <img
                  src={comment.userPhoto}
                  alt={comment.userName}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-800">{comment.userName}</p>
                  <p className="text-sm text-gray-500">
                    {formatDistanceToNow(new Date(comment.time))} ago
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-700">{comment.text}</p>

              {/* Reaction Button */}
              <div className="flex items-center space-x-4 mt-2">
                <button
                  className="text-sm text-gray-600"
                  onClick={() => handleReaction(index)}
                >  <FaRegThumbsUp />({comment.reactions.like})
                </button>
              </div>

              {/* Replies */}
              <div className="mt-4">
                {comment.replies.map((reply, replyIndex) => (
                  <div key={replyIndex} className="pl-8 mt-2 border-l-2 border-gray-300">
                    <div className="flex items-center space-x-4 mb-3">
                      <img
                        src={reply.userPhoto}
                        alt={reply.userName}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-gray-800">{reply.userName}</p>
                        <p className="text-sm text-gray-500">
                          {formatDistanceToNow(new Date(reply.time))} ago
                        </p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700">{reply.text}</p>
                  </div>
                ))}

                {/* Add reply */}
                {comment.showReplyForm && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const replyText = e.target.replyText.value;
                      handleAddReply(index, replyText);
                      e.target.reset();
                    }}
                    className="mt-4"
                  >
                    <textarea
                      name="replyText"
                      className="w-full p-2 border border-gray-300 rounded-lg text-black"
                      placeholder="Add a reply..."
                    />
                    <div className="flex justify-end mt-2">
                      <button
                        type="submit"
                        className="bg-blue-600 text-white py-1 px-4 rounded-lg"
                      >
                        Reply
                      </button>
                    </div>
                  </form>
                )}
                {!comment.showReplyForm && (
                  <button
                    onClick={() => toggleReplyForm(index)}
                    className="text-sm text-blue-500"
                  >
                    Reply
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <h4 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
          Add a comment:
        </h4>
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
              className={`py-2 px-4 rounded-lg ${
                comment.trim()
                  ? "bg-blue-600 text-white cursor-pointer"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!comment.trim()}
            >
              <GoPaperAirplane />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}; 

export default Comment;
