"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import WallpaperLogo from "../public/images/logos/WallpaperLogo.webp";
import { useLanguage } from "@/frontend/context/LanguageContext";

export default function GameCard() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="
        bg-[#313744] p-6 pt-5 text-white rounded-2xl 
        w-10/12 md:w-1/2 lg:w-4/12 
        flex flex-col gap-4 relative
      "
    >
      {/* TÍTULO */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl font-semibold"
      >
        {t("components.game_card.title")}
      </motion.h1>

      {/* CONTEÚDO */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* IMAGEM */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="sm:w-full md:w-1/2 md:p-2"
        >
          <Image
            src={WallpaperLogo}
            alt={t("components.game_card.image_alt")}
            className="w-full h-auto"
          />
        </motion.div>

        {/* TEXTO */}
        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-sm md:text-base md:w-1/2 text-center md:text-left"
        >
          {t("components.game_card.description")}
        </motion.p>
      </div>

      {/* BOTÃO */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="
          bg-[#0033FF] rounded-xl px-14 py-2 font-semibold cursor-pointer
          text-sm md:text-base
          md:absolute md:left-1/2 md:-translate-x-1/2 md:-bottom-5
        "
      >
        {t("components.game_card.button")}
      </motion.button>
    </motion.div>
  );
}
