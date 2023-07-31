import React from "react";

const Bot = () => {
  const handleBotClick = () => {
    const connectSection = document.getElementById("connect");
    if (connectSection) {
      connectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-gray-100 text-4xl bg-gray-800 w-16 h-16 flex items-center justify-center rounded-full animate-bounce"
      onClick={handleBotClick}
    >
      <ion-icon name="chatbox-outline"></ion-icon>
    </div>
  );
};

export default Bot;
