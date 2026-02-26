"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ChatbotButton from "./ChatbotButton";
import ChatbotCard from "./ChatbotCard";
import ChatBotCardFeedback from "./ChatBotCardFeedback"; // Componente que criaremos abaixo

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleCloseChat = () => {
    setOpen(false);
    // Mostra o feedback apenas quando o chat é fechado
    setShowFeedback(true);
  };

  const handleToggle = () => {
    if (open) {
      handleCloseChat();
    } else {
      setOpen(true);
      setShowFeedback(false); // Garante que o feedback suma se abrir o chat de novo
    }
  };

  return (
    <div className="flex flex-col items-end gap-4 w-72">
      <div className="fixed bottom-25 right-6 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {open && <ChatbotCard onClose={handleCloseChat} />}
        </AnimatePresence>

        <AnimatePresence>
          {showFeedback && !open && (
            <ChatBotCardFeedback onClose={() => setShowFeedback(false)} />
          )}
        </AnimatePresence>
      </div>

      <div className="fixed bottom-6 right-6 z-30">
        <ChatbotButton onClick={handleToggle} isOpen={open} />
      </div>
    </div>
  );
}