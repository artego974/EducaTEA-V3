"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/frontend/context/LanguageContext"; // Importação do Contexto

// Componentes
import CommentCard from "@/frontend/components/ForumComments";
import CommentOverlay from "@/frontend/components/comunidade/CommentOverlay";

// Ícones
import {
  TrendingUp,
  Clock,
  MapPin,
  GraduationCap,
  SlidersHorizontal,
  Search,
} from "lucide-react";

// Assets (Avatars)
import avatar01 from "../../../public/images/avatars/avatar01.png";
import avatar02 from "../../../public/images/avatars/avatar02.png";
import avatar03 from "../../../public/images/avatars/avatar03.png";
import avatar04 from "../../../public/images/avatars/avatar04.png";
import avatar05 from "../../../public/images/avatars/avatar05.png";
import avatar06 from "../../../public/images/avatars/avatar06.png";
import avatar07 from "../../../public/images/avatars/avatar07.png";
import avatar08 from "../../../public/images/avatars/avatar08.png";
import avatar09 from "../../../public/images/avatars/avatar09.png";

// Dados Mockados (Mantidos fixos conforme solicitado)
const comments = [
  {
    text: "Projeto incrível! Vai ajudar muitos professores a trabalharem de forma mais inclusiva. 👏",
    author: "João Guilherme",
    image: avatar01,
  },
  {
    text: "Adorei a ideia! Muito importante trazer tecnologia para apoiar alunos com TEA.",
    author: "Maria Clara",
    image: avatar02,
  },
  {
    text: "Sensacional! Esse jogo tem um propósito lindo e educativo. 💙",
    author: "Pedro Henrique",
    image: avatar03,
  },
  {
    text: "Parabéns pela iniciativa! Educação inclusiva transforma vidas.",
    author: "Ana Beatriz",
    image: avatar04,
  },
  {
    text: "Que orgulho ver estudantes criando algo tão impactante. 🚀",
    author: "Lucas Andrade",
    image: avatar05,
  },
  {
    text: "Um projeto inovador e necessário! Vai fazer diferença nas salas de aula.",
    author: "Arthur Juwer",
    image: avatar06,
  },
  {
    text: "Um projeto inovador e necessário! Vai fazer diferença nas salas de aula.",
    author: "Arthur Juwer",
    image: avatar07,
  },
  {
    text: "Um projeto inovador e necessário! Vai fazer diferença nas salas de aula.",
    author: "Arthur Juwer",
    image: avatar08,
  },
  {
    text: "Parabéns pela iniciativa! Educação inclusiva transforma vidas.",
    author: "Ana Beatriz",
    image: avatar09,
  },
  {
    text: "Que orgulho ver estudantes criando algo tão impactante. 🚀",
    author: "Lucas Andrade",
    image: avatar05,
  },
  {
    text: "Um projeto inovador e necessário! Vai fazer diferença nas salas de aula.",
    author: "Arthur Juwer",
    image: avatar06,
  },
  {
    text: "Um projeto inovador e necessário! Vai fazer diferença nas salas de aula.",
    author: "Arthur Juwer",
    image: avatar09,
  },
];

export default function Comunidade() {
  const [selectedComment, setSelectedComment] = useState(null);
  // Usamos o ID do filtro 'highlights' como padrão
  const [activeFilter, setActiveFilter] = useState("highlights");

  const { t } = useLanguage();

  // Array de filtros reconstruído dentro do componente para ter acesso ao 't' ou apenas mapeado com IDs
  const filters = [
    { id: "highlights", icon: TrendingUp },
    { id: "recent", icon: Clock },
    { id: "senac", icon: MapPin },
    { id: "teachers", icon: GraduationCap },
    { id: "custom", icon: SlidersHorizontal },
  ];

  // Texto que será animado (Vindo da tradução)
  const titleText = t("pages.community.hero_title");

  // Variantes para a animação de digitação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, display: "none" },
    visible: { opacity: 1, display: "inline" },
  };

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative bg-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          {/* Efeito Typewriter */}
          <motion.h1
            key={titleText} // A chave muda quando a língua muda, reiniciando a animação corretamente
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4 min-h-[3.5rem]"
          >
            {titleText.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
            {/* Cursor piscando */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-[3px] h-[32px] md:h-[40px] bg-[#1A3879] ml-1 align-sub"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto"
          >
            {t("pages.community.hero_subtitle")}
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 ">
        {/* Controls Bar (Search + Filters) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-2xl shadow-gray-200/50 p-4 mb-12 flex flex-col lg:flex-row items-center gap-4 border border-gray-100"
        >
          {/* Search Input */}
          <div className="relative w-full lg:w-1/3 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#1A3879] transition-colors">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder={t("pages.community.search_placeholder")}
              className="block w-full pl-10 pr-4 py-3 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none text-gray-700 placeholder:text-gray-400"
            />
          </div>

          {/* Divider on Desktop */}
          <div className="hidden lg:block w-px h-10 bg-gray-200 mx-2"></div>

          {/* Filters List */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 w-full">
            {filters.map(({ id, icon: Icon }) => {
              const isActive = activeFilter === id;
              const label = t(`pages.community.filters.${id}`); // Traduz o label baseado no ID

              return (
                <button
                  key={id}
                  onClick={() => setActiveFilter(id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[#1A3879] text-white shadow-md shadow-[#1A3879]/20"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <Icon size={16} />
                  {label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Comments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {comments.map((comment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
            >
              <div
                onClick={() => setSelectedComment(comment)}
                className="cursor-pointer h-full"
              >
                <CommentCard
                  text={comment.text}
                  author={comment.author}
                  image={comment.image.src}
                  comunidade={true}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1A3879] text-white px-8 py-2 rounded-full font-bold uppercase cursor-pointer"
          >
            <span>{t("pages.community.load_more")}</span>
          </motion.button>
        </div>
      </section>

      {/* Overlay */}
      <AnimatePresence>
        {selectedComment && (
          <CommentOverlay
            comment={selectedComment}
            onClose={() => setSelectedComment(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
