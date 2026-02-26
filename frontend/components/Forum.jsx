"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/frontend/context/LanguageContext";

import avatar01 from "../public/images/avatars/avatar01.png";
import avatar02 from "../public/images/avatars/avatar02.png";
import avatar03 from "../public/images/avatars/avatar03.png";
import avatar04 from "../public/images/avatars/avatar04.png";
import avatar05 from "../public/images/avatars/avatar05.png";
import avatar06 from "../public/images/avatars/avatar06.png";
import avatar07 from "../public/images/avatars/avatar07.png";
import avatar08 from "../public/images/avatars/avatar08.png";
import avatar09 from "../public/images/avatars/avatar09.png";

import CommentCard from "./ForumComments";

export default function Forum() {
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useLanguage();

  // Comentários mantidos fixos em Português conforme solicitado
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
      image: avatar09,
    },
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const visibleComments = isMobile ? comments.slice(0, 3) : comments;

  /* ================= ANIMATION VARIANTS ================= */

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="comunidade"
      className="py-10 lg:py-15 flex flex-col items-center w-full"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Title */}
      <motion.h1
        className="font-bold text-2xl lg:text-3xl mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {t("components.forum.title")}
      </motion.h1>

      {/* Comments grid */}
      <div className="w-full px-6">
        <motion.div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-4 
            gap-6
            place-items-center
          "
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {visibleComments.map((comment, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <CommentCard
                text={comment.text}
                author={comment.author}
                image={comment.image.src}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        className="flex flex-col gap-6 items-center w-full mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.a
          href="/comunidade"
          className="bg-[#0033FF] text-white px-8 py-2 rounded-full font-bold uppercase"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t("components.forum.view_more")}
        </motion.a>

        <motion.span
          className="w-4/5 lg:w-3/5 h-px bg-black block"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          style={{ transformOrigin: "left" }}
        />
      </motion.div>
    </motion.section>
  );
}
