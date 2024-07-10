"use client";

import { useChat } from "ai/react";
import { useState } from "react";

const Chatbot = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <button onClick={toggleChat} className="fixed bottom-8 right-8">
        <img src="chat.svg" alt="chat" className="h-10 rounded-full" />
      </button>

      {isChatOpen && (
        <div className="fixed bottom-20 right-4 w-96 h-[80%] bg-white shadow-lg rounded-lg p-4 flex flex-col z-20">
          <h2 className="text-lg font-bold text-center mb-4">Support Buddy</h2>
          <div className="flex-grow overflow-y-auto">
            {messages.map((message) => (
              <div key={message.id}>
                <strong>{message.role === "user" ? "User: " : "AI: "}</strong>
                {message.content}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="mt-4 flex">
            <input
              name="prompt"
              value={input}
              onChange={handleInputChange}
              id="input"
              className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white border border-gray-300 p-2 rounded-r-lg"
            >
              <img src="send.svg" alt="send" className="h-6" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
