"use client";

import React from "react";
import Image from "next/image";
import IconAcessibilidade from "../../public/images/icons/Acessibilidade.webp";
import { useLanguage } from "@/frontend/context/LanguageContext";

export default function AcessibilidadeButton({ onClick }) {
  const { t } = useLanguage();

  return (
    <div
      onClick={onClick}
      className="bg-[#F91818] lg:w-[240px] w-full cursor-pointer border-2 border-white rounded-full text-white flex justify-between gap-3 lg:py-1.5 lg:px-5 p-2.5 items-center font-semibold hover:opacity-90 transition"
    >
      <Image
        src={IconAcessibilidade}
        className="lg:size-11 size-10"
        alt={t("components.accessibility_button.alt")}
      />
      <p className="lg:w-full lg:block hidden">
        {t("components.accessibility_button.text")}
      </p>
    </div>
  );
}

// return (
//   <div
//     onClick={onClick}
//     className={`bg-[#F9A318] ${t('components.chatbot_button.text') == "Habla con el Chatbot" ? "lg:w-[255px] w-full" : ""}  z-40 cursor-pointer border-2 border-white rounded-full text-white flex justify-between gap-3 lg:py-1.5 lg:px-5 p-2.5 items-center font-semibold hover:opacity-90 transition`}
//   >
//     <Image
//       src={ChatFace}
//       className="lg:size-11 size-10"
//       alt={t('components.chatbot_button.alt')}
//     />
//     <p className="lg:w-full lg:block hidden ">
//       {t('components.chatbot_button.text')}
//     </p>
//   </div>
// );
