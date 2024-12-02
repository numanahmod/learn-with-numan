"use client"; // Tell Next.js this component should be rendered on the client

import React, { useState } from "react";
import Swal from "sweetalert2";

const SSCGrammarPage = () => {
  const topics = [
    { 
      title: "Parts of Speech", 
      videoUrl: "/tag.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" 
    },
    { 
      title: "Sentence", 
      videoUrl: "/videos/voice.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" 
    },
    { 
      title: "Tense", 
      videoUrl: "/videos/voice.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" 
    },
    { 
      title: "Preposition", 
      videoUrl: "/videos/voice.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" 
    },
    { 
      title: "Preposition-2", 
      videoUrl: "/videos/voice.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" 
    },
    { 
      title: "01. With Clue", 
      videoUrl: "/videos/voice.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" 
    },
    { 
      title: "02. Without Clue", 
      videoUrl: "/videos/voice.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" 
    },
    { 
      title: "03. Substitution Table", 
      videoUrl: "/videos/voice.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" 
    },
    { 
      title: "04. Right Forms of Verbs", 
      videoUrl: "/videos/voice.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" 
    },
    { 
      title: "05. Narration", 
      videoUrl: "/tag.mp4",  
      pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" 
    },
    { 
      title: "06. Changing Sentence-1", 
      videoUrl: "/videos/voice.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" 
    },
    { 
      title: "06.2 Changing Sentence-2", 
      videoUrl: "/videos/voice.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" 
    },
    { 
      title: "07. Completing Sentence", 
      videoUrl: "/videos/voice.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" 
    },
    { 
      title: "08. Suffix-Prefix", 
      videoUrl: "/videos/voice.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" 
    },
    { 
      title: "09. Tag Questions", 
      videoUrl: "/tag.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" 
    },
    { 
      title: "10. Sentence Connector", 
      videoUrl: "/videos/voice.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" 
    },
    { 
      title: "11. Capital letter and Punctuation", 
      videoUrl: "", 
      pdfUrl: "" 
    },
    { 
      title: "12. CV", 
      videoUrl: "/videos/parts_of_speech.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" 
    },
    { 
      title: "13. Application", 
      videoUrl: "/videos/prepositions.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" 
    },
    { 
      title: "14. Paragraph", 
      videoUrl: "", 
      pdfUrl: "" 
    },
    { 
      title: "15. Composition", 
      videoUrl: "/videos/sentence_structure.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" 
    },
    { 
      title: "16. Importance Verb List", 
      videoUrl: "/videos/modals.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" 
    },
    { 
      title: "17. Dialogue", 
      videoUrl: "/videos/conjunctions.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" 
    },
    { 
      title: "18. Graph-chart", 
      videoUrl: "/videos/conjunctions.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" 
    },
    { 
      title: "19. Use of Have", 
      videoUrl: "/videos/conjunctions.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1dhltEIzRMQJdrdAiMRD3gWpIiRBy42E5/view?usp=sharing" 
    },
  ];

  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [note, setNote] = useState("");
  const [reviews, setReviews] = useState([
    { text: "This lesson was incredibly helpful! The explanation of tenses was clear and easy to follow." },
    { text: "I learned a lot from this video, especially on parts of speech. Highly recommended!" },
  ]);
  const [review, setReview] = useState("");

  const handleAddReview = (e) => {
    e.preventDefault();
    const charCount = review.trim().length;
    if (review && charCount > 20) {
      setReviews([...reviews, { text: review }]);
      setReview("");
      Swal.fire({
        title: "Thank you",
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

  const handleAddNote = () => {
    const charCount = note.trim().length;
    if (charCount > 20) {
      Swal.fire({
        title: "Note Added",
        text: "Your note has been added successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
      setNote("");
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
          <div className="relative w-full h-[480px]">
            {selectedTopic.videoUrl ? (
              selectedTopic.videoUrl.startsWith("http") ? (
                <iframe
                  src={selectedTopic.videoUrl}
                  title={selectedTopic.title}
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={selectedTopic.videoUrl}
                  controls
                  className="w-full h-full rounded-lg"
                >
                  Your browser does not support the video tag.
                </video>
              )
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
                href={selectedTopic.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white py-2 px-6 rounded-lg"
              >
                See PDF
              </a>
            </div>
          )}
        </div>

        {/* Topics Section */}
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
