"use client"; // Tell Next.js this component should be rendered on the client

import React, { useState, useEffect } from "react";
import Comment from "../components/comment/Comment";

const SSCGrammarPage = () => {
  const topics = [
    { 
      title: "Parts of Speech", 
      videoUrl: "/tag.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1mrU3UNVBkHapi805oH_kptOjzTPsn2UW/view?usp=drive_link",
      textPage: '/sscpartsofSpeech'
    },
    { 
      title: "Sentence", 
      videoUrl: "/videos/voice.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1s01L39uM-rA7LcG6RxjTaE0Mm42N_tSW/view?usp=drive_link" 
    },
    { 
      title: "Tense", 
      videoUrl: "/videos/voice.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1fSprFQ3mwEpWYpW2pylS-VkZhsQwcV0J/view?usp=drive_link" 
    },
    { 
      title: "Preposition", 
      videoUrl: "/videos/voice.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1ntCO_4Jp3hmZI-3Hk3qrxc8yKGqKm1CM/view?usp=drive_link" 
    },
    { 
      title: "Preposition-2", 
      videoUrl: "/videos/voice.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1oap4_eh_wWm24bMUjkSSu5rdZu-p-ttJ/view?usp=drive_link" 
    },
    { 
      title: "01. With Clue", 
      videoUrl: "/videos/voice.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1GUr9icjGHO9k9uffs6-1ZJoOVQrco2bN/view?usp=drive_link" 
    },
    { 
      title: "02. Without Clue", 
      videoUrl: "/videos/voice.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1IIy7nw_cApsnuRz8FAbkq3lbWolf9LK_/view?usp=drive_link" 
    },
    { 
      title: "03. Substitution Table", 
      videoUrl: "/videos/voice.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1A2TVt7cYGKJSflyfWtfs5NwcLADIKok8/view?usp=drive_link" 
    },
    { 
      title: "04. Right Forms of Verbs", 
      videoUrl: "/videos/voice.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1zOCGCo0NUgOndo-_XczcIyGKtFwEJXsi/view?usp=drive_link" 
    },
    { 
      title: "05. Narration", 
      videoUrl: "/tag.mp4",  
      pdfUrl: "https://drive.google.com/file/d/10GeRGryeBAIYKfZOtIEoC6TKWQ1-V8_q/view?usp=drive_link" 
    },
    { 
      title: "06. Changing Sentence-1", 
      videoUrl: "/videos/voice.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1WDGMv24iMWxveopo7k-qbYbJHJ0Fb2Sc/view?usp=drive_link" 
    },
    { 
      title: "06.2 Changing Sentence-2", 
      videoUrl: "/videos/voice.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1S5vZs6lfBHnWr5wIe3H6kSthMqbzgmjR/view?usp=drive_link" 
    },
    { 
      title: "07. Completing Sentence", 
      videoUrl: "/videos/voice.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1G8OJA9Za3Dan1b6radujwzgHCZSGVra8/view?usp=drive_link" 
    },
    { 
      title: "08. Suffix-Prefix", 
      videoUrl: "/videos/voice.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1T5FD9k9_T9b3HEqCORTOy7b1KiJrBpLG/view?usp=drive_link" 
    },
    { 
      title: "09. Tag Questions", 
      videoUrl: "/tag.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1O4cSbEF0fBcWup-jzGB92N93oj5eXIUW/view?usp=drive_link" 
    },
    { 
      title: "10. Sentence Connector", 
      videoUrl: "/videos/voice.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1H7As72wCd3zlJ3nRlXS-iUAlpQAVcsEx/view?usp=drive_link" 
    },
    { 
      title: "11. Capital letter and Punctuation", 
      videoUrl: "", 
      pdfUrl: "https://drive.google.com/file/d/1ywpEgT3DLeEhhohk_twXoMWZaL9AD9CD/view?usp=drive_link" 
    },
    { 
      title: "12. CV", 
      videoUrl: "/videos/parts_of_speech.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1ZdZRyEl-ptDkzeZsnUPmnPRjDqXJXMss/view?usp=drive_link" 
    },
    { 
      title: "13. Application", 
      videoUrl: "/videos/prepositions.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1ebQDZ2DhR8T25EDBx-kMV4M6jMtDBWmp/view?usp=drive_link" 
    },
    { 
      title: "14. Paragraph", 
      videoUrl: "", 
      pdfUrl: "https://drive.google.com/file/d/1-nkklzR4iafq6-LPVH9egMoItrMmVTSj/view?usp=drive_link" 
    },
    { 
      title: "15. Composition", 
      videoUrl: "/videos/sentence_structure.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1OGYOrx4BSzUMFFnkJ7Tc8qqNUjbcx1RQ/view?usp=drive_link" 
    },
    { 
      title: "16. Importance Verb List", 
      videoUrl: "/videos/modals.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1cGL05YPcktRRRJxyACniv1gCZNHP88eM/view?usp=drive_link" 
    },
    { 
      title: "17. Dialogue", 
      videoUrl: "/videos/conjunctions.mp4", 
      pdfUrl: "https://drive.google.com/file/d/14OSLddob53WJUDSipqKVnz8tR9q9JM6r/view?usp=drive_link" 
    },
    { 
      title: "18. Graph-chart", 
      videoUrl: "/videos/conjunctions.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1SBQTME03VORz8iuonxCtxWfMwLnYhgsb/view?usp=drive_link" 
    },
    { 
      title: "19. Use of Have", 
      videoUrl: "/videos/conjunctions.mp4", 
      pdfUrl: "https://drive.google.com/file/d/1xrOkPFS9B7FoNPcwLtzIQi1cEDDHFjEh/view?usp=drive_link" 
    },
  ];

  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [hasPaid, setHasPaid] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [email, setEmail] = useState("");

  // Intercept all clicks on the page
  useEffect(() => {
    const handleClick = (e) => {
      if (!hasPaid) {
        e.preventDefault(); // Prevent default behavior (e.g., opening links)
        setIsPaymentModalOpen(true); // Show payment modal
      }
    };

    // Attach the click event listener to the entire document
    document.addEventListener("click", handleClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [hasPaid]);

  // Handle payment submission
  const handlePaymentSubmit = async () => {
    if (!transactionId || !email) {
      alert("Please enter both your email and transaction ID.");
      return;
    }

    try {
      const response = await fetch("/api/submit-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ transactionId, email }),
      });

      if (response.ok) {
        alert("Your payment request has been submitted. Please wait for confirmation.");
        setIsPaymentModalOpen(false);
      } else {
        alert("Failed to submit payment request.");
      }
    } catch (error) {
      console.error("Error submitting payment request:", error);
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
                  style={{ pointerEvents: hasPaid ? "auto" : "none" }} // Disable interaction if not paid
                />
              ) : (
                <video
                  src={selectedTopic.videoUrl}
                  controls
                  className="w-full h-full rounded-lg"
                  style={{ pointerEvents: hasPaid ? "auto" : "none" }} // Disable interaction if not paid
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
            {!hasPaid && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  Please pay to unlock this content.
                </p>
              </div>
            )}
          </div>
          {/* PDF Button Section */}
          {selectedTopic.pdfUrl && (
            <div className="flex justify-center mt-4">
              <a
                href={hasPaid ? selectedTopic.pdfUrl : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-blue-600 text-white py-2 px-6 rounded-lg ${
                  !hasPaid ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                See PDF
              </a>
            </div>
          )}
          {selectedTopic.textPage && (
            <div className="flex justify-center mt-4">
              <a
                href={hasPaid ? selectedTopic.textPage : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-blue-600 text-white py-2 px-6 rounded-lg ${
                  !hasPaid ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Text
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
                onClick={() => {
                  if (hasPaid) {
                    setSelectedTopic(topic);
                  }
                }}
              >
                {topic.title}
              </li>
            ))}
          </div>
        </div>
      </div>
      {/* Comment Section */}
      <Comment />

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Pay with Bkash</h2>
            <p className="mb-4">Send payment to Bkash number: <strong>01305828681</strong> and enter your details below.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Transaction ID"
              className="w-full p-2 border rounded mb-4"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsPaymentModalOpen(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handlePaymentSubmit}
                className="bg-green-600 text-white py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SSCGrammarPage;