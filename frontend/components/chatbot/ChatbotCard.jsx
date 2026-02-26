"use client";

import { ChevronDown, ArrowUpRight, RotateCcw } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ChatFace from "../../public/images/avatars/avatar09.png";
import { motion } from "framer-motion";

const CHAT_FLOW = {
  "O que é o projeto?": {
    answer:
      "O EDUCATEA é um projeto educacional voltado para apoiar o aprendizado de crianças com TEA.",
    followUps: {
      "Quais são os benefícios?":
        "Os benefícios incluem maior engajamento, aprendizado personalizado e inclusão educacional.",
      "Quem pode utilizar?":
        "O projeto é voltado para crianças com TEA, educadores e responsáveis.",
      "Como participar?":
        "Basta acessar a plataforma e realizar o cadastro para começar a utilizar.",
    },
  },
  "Qual a motivação do projeto?": {
    answer:
      "A motivação surgiu da necessidade de criar soluções educacionais mais inclusivas.",
    followUps: {
      "Por que o projeto foi criado?":
        "Ele foi criado para suprir a falta de ferramentas digitais acessíveis.",
      "Qual problema ele resolve?":
        "Ajuda a tornar o ensino mais adaptado às necessidades individuais.",
      "Quem idealizou o projeto?":
        "O projeto foi idealizado por educadores e desenvolvedores com foco em inclusão.",
    },
  },
  "Como ele é aplicado?": {
    answer:
      "O projeto é aplicado por meio de jogos educativos e atividades digitais adaptadas.",
    followUps: {
      "É usado em escolas?":
        "Sim, pode ser utilizado tanto em escolas quanto em casa.",
      "Precisa de acompanhamento?":
        "O acompanhamento de um educador ou responsável é recomendado.",
      "Funciona em celulares?":
        "Sim, funciona em celulares, tablets e computadores.",
    },
  },
  "Onde posso jogar?": {
    answer: "Você pode jogar diretamente pela plataforma web do EDUCATEA.",
    followUps: {
      "Precisa instalar algo?":
        "Não, o acesso é totalmente online pelo navegador.",
      "É gratuito?":
        "Sim, o acesso é gratuito para fins educacionais.",
      "Tem versão mobile?":
        "Sim, a plataforma é responsiva e funciona em dispositivos móveis.",
    },
  },
  "Quais são os resultados atuais?": {
    answer:
      "Os resultados mostram avanços no engajamento e aprendizado das crianças.",
    followUps: {
      "Há dados comprovados?":
        "Sim, os dados são coletados durante a utilização da plataforma.",
      "O projeto foi testado?":
        "Sim, o projeto passou por fases de testes com educadores e alunos.",
      "Quais melhorias foram observadas?":
        "Melhorias em concentração, autonomia e interesse pelo aprendizado.",
    },
  },
};

export default function ChatbotCard({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [currentFlow, setCurrentFlow] = useState(null);

  function handleMainOptionClick(question) {
  setMessages([{ sender: "user", text: question }]);
  setCurrentFlow(question);
  setIsTyping(true);

  setTimeout(() => {
    setMessages((prev) => [
      ...prev,
      { sender: "bot", text: CHAT_FLOW[question].answer },
    ]);
    setIsTyping(false);
  }, 1000); // tempo de resposta (ms)
}

const [isTyping, setIsTyping] = useState(false);

  function handleFollowUp(option) {
  setMessages((prev) => [...prev, { sender: "user", text: option }]);
  setIsTyping(true);

  setTimeout(() => {
    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: CHAT_FLOW[currentFlow].followUps[option],
      },
    ]);
    setIsTyping(false);
  }, 900);
}


  function handleReset() {
    setMessages([]);
    setCurrentFlow(null);
  }
  const cardVariants = {
  initial: {
    opacity: 0,
    y: 20,           // abertura como estava
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    height: 0,       // efeito gaveta
    scaleY: 0.95,
    transformOrigin: "top",
  },
};



  return (
    <motion.div
  variants={cardVariants}
  initial="initial"
  animate="animate"
  exit="exit"
  transition={{
    duration: 0.35,
    ease: "easeInOut",
  }}
  className="z-50 w-[400px] max-h-[70dvh] overflow-hidden rounded-2xl border bg-white shadow-xl p-5 pb-6 flex flex-col"
>

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1">
          <Image src={ChatFace} className="w-6" alt="Chatbot" />
          <span className="font-semibold text-sm">ChatBot EDUCATEA</span>
        </div>
        <button onClick={onClose}>
          <ChevronDown className="w-6 h-6 text-gray-500 hover:text-black cursor-pointer" />
        </button>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 overflow-y-auto space-y-4 px-1">
        {/* Estado inicial */}
        
          <div className="flex flex-col items-center mb-6">
            <div className="mt-4 size-[74px] rounded-full bg-orange-400 flex items-center justify-center mb-3">
              <Image src={ChatFace} className="w-12" alt="Chatbot" />
            </div>
            <p className="font-semibold">Olá 👋</p>
            <p className="text-sm text-gray-600">Como posso te ajudar?</p>
          </div>
        

        {/* Mensagens */}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] px-4 py-2 rounded-xl text-sm ${
                msg.sender === "user"
                  ? "bg-[#1A3879] text-white rounded-br-none"
                  : "bg-gray-100 text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {/* MENU INICIAL */}
      {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 px-4 py-2 rounded-xl text-sm text-gray-500 flex items-center gap-1">
              <span className="animate-pulse">Digitando</span>
              <span className="animate-bounce">.</span>
              <span className="animate-bounce delay-100">.</span>
              <span className="animate-bounce delay-200">.</span>
            </div>
          </div>
        )}
        {!currentFlow && (
        <div className="mt-4 flex flex-col gap-3">
          {Object.keys(CHAT_FLOW).map((text, index) => (
            <button
              key={index}
              onClick={() => handleMainOptionClick(text)}
              className="flex cursor-pointer items-center justify-center relative rounded-full border-[1.5px] border-[#1A3879] px-4 py-3 bg-gradient-to-b from-[#2F80ED]/10 to-[#D9D9D9]/20 hover:opacity-90 transition"
            >
              <ArrowUpRight className="w-5 h-5 absolute left-3" />
              <span className="text-[15px]">{text}</span>
            </button>
          ))}
        </div>
      )}

      {/* FOLLOW UPS */}
      {currentFlow && !isTyping && (
        <div className="mt-4 flex flex-col gap-3">
          {Object.keys(CHAT_FLOW[currentFlow].followUps).map((text, index) => (
            <button
              key={index}
              disabled={isTyping}
              onClick={() => handleFollowUp(text)}
              className="rounded-full cursor-pointer  border px-4 py-2 text-sm hover:bg-gray-50 transition"
            >
              {text}
            </button>
          ))}

          <button
            onClick={handleReset}
            disabled={isTyping}
            className="flex cursor-pointer  items-center justify-center gap-2 rounded-full border border-dashed px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 transition"
          >
            <RotateCcw className="w-4 h-4" />
            Voltar ao menu inicial
          </button>
        </div>
      )}
      </div>

      

      
    </motion.div>
  );
}
