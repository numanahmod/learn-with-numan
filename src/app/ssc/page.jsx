"use client";  // Tell Next.js this component should be rendered on the client

import React, { useState } from "react";
import Swal from "sweetalert2";
// import tag from "@/";

const SSCGrammarPage = () => {
  const topics = [
    { title: "Tag Questions", videoUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fnuman12321%2Fvideos%2F1461798374500857%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true">' },
    { title: "Voice", videoUrl: "https://www.youtube.com/embed/sample2", pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" },
    { title: "Narration", videoUrl: "", pdfUrl: "" }, // No video and PDF available
    { title: "Parts of Speech", videoUrl: "https://www.youtube.com/embed/sample3", pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" },
    { title: "Prepositions", videoUrl: "https://www.youtube.com/embed/sample4", pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" },
    { title: "Articles", videoUrl: "", pdfUrl: "" }, // No video and PDF available
    { title: "Sentence Structure", videoUrl: "https://www.youtube.com/embed/sample5", pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" },
    { title: "Modals", videoUrl: "https://www.youtube.com/embed/sample6", pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" },
    { title: "Conjunctions", videoUrl: "https://www.youtube.com/embed/sample7", pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" },
  ];

  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [note, setNote] = useState("");
  const [reviews, setReviews] = useState([
    {
      text: "This lesson was incredibly helpful! The explanation of tenses was clear and easy to follow.",
    },
    {
      text: "I learned a lot from this video, especially on parts of speech. Highly recommended!",
    },
  ]);
  const [review, setReview] = useState("");

  // Function to handle adding a new review
  const handleAddReview = (e) => {
    e.preventDefault();
    const charCount = review.trim().length; // Get the character count (ignoring spaces)
    if (review && charCount > 20) {
      setReviews([...reviews, { text: review }]);
      setReview(""); // Clear review after submission
      Swal.fire({
        title: "Review Submitted",
        text: "Your review has been submitted successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Invalid Review",
        text: "Please enter at least 20 characters in the review.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  // Function to handle adding a note
  const handleAddNote = () => {
    const charCount = note.trim().length; // Get the character count (ignoring spaces)
    if (charCount > 20) {
      Swal.fire({
        title: "Note Added",
        text: "Your note has been added successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
      setNote(""); // Clear the note after submission
    } else {
      Swal.fire({
        title: "Invalid Note",
        text: "Please enter more than 20 characters in the note.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-8 pt-28">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Video Section */}
        <div className="flex-1 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="relative w-full h-[480px]"> {/* Increased video height */}
            {selectedTopic.videoUrl ? (
              <iframe
                src={selectedTopic.videoUrl}
                title={selectedTopic.title}
                className="w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg text-center p-6">
                <p className="text-lg font-semibold text-gray-600">
                  Sorry, the video is not uploaded yet.
                </p>
              </div>
            )}
          </div>
          {/* PDF Button Section */}
          {selectedTopic.pdfUrl && (
            <div className="flex justify-center mt-4">
              <a
                href={selectedTopic.pdfUrl} // Dynamic PDF link based on the selected topic
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white py-2 px-6 rounded-lg"
              >
                See PDF
              </a>
            </div>
          )}
        </div>

        {/* Topics Section with Scroll */}
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            SSC English Grammar Topics
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Select a topic to explore detailed video lessons. Stay tuned for more updates!
          </p>
          <div className="max-h-[400px] overflow-y-auto space-y-4">
            {topics.map((topic, index) => (
              <li
                key={index}
                className={`p-3 rounded-lg text-lg font-medium cursor-pointer transition duration-300 ease-in-out transform ${
                  selectedTopic.title === topic.title
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700"
                } hover:bg-blue-200 hover:text-blue-800`}
                onClick={() => setSelectedTopic(topic)}
              >
                {topic.title}
              </li>
            ))}
          </div>
        </div>
      </div>

      {/* Note Section */}
      <div className="mt-10 bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Note:</h3>
        <textarea
          className="w-full p-4 border border-gray-300 rounded-lg text-black"
          rows="4"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Add your note here..."
        />
        <button
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg"
          onClick={handleAddNote}
        >
          Add Note
        </button>
      </div>

      {/* Review Section */}
      <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Reviews:</h3>
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>

        <h4 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Add a Review:</h4>
        <form onSubmit={handleAddReview} className="space-y-4">
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg text-black"
            rows="4"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Your review..."
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default SSCGrammarPage;
