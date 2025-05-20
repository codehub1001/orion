import React, { useState } from "react";
import { FaWhatsapp, FaTimes, FaPaperPlane } from "react-icons/fa";

const whatsappNumber = "2348112780944";

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setMessage(""); // clear input after sending
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg"
        >
          <FaWhatsapp className="text-2xl" />
        </button>
      )}

      {/* Chat Box */}
      {open && (
        <div className="w-72 bg-white rounded-xl shadow-2xl border border-gray-200">
          {/* Header */}
          <div className="flex items-center justify-between bg-green-500 text-white px-4 py-3 rounded-t-xl">
            <div className="font-semibold">Support Chat</div>
            <button onClick={() => setOpen(false)}>
              <FaTimes />
            </button>
          </div>

          {/* Body */}
          <div className="px-4 py-3 text-sm text-gray-700">
            👋 Hi! How can we help you today? Send us a message below and we'll respond via WhatsApp.
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 p-3 border-t border-gray-200">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppWidget;
