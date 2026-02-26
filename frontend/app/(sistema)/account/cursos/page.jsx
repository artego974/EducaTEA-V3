"use client";

import React from "react";
import { useLanguage } from "@/frontend/context/LanguageContext"; // Importação do Contexto
import CursosSection from "@/frontend/components/(sistema)/account/CursosSection";

// Imagens
import avatar02 from "../../../../public/images/avatars/avatar02.png";
import avatar07 from "../../../../public/images/avatars/avatar07.png";

export default function Cursos() {
  const { t } = useLanguage();

  // Array definido dentro do componente para usar as traduções
  const courses = [
    {
      image: avatar02,
      title: t("components.courses_page.course_1"),
      time: "08h",
      rating: "4.7",
    },
    {
      image: avatar07,
      title: t("components.courses_page.course_2"),
      time: "03h",
      rating: "4.9",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen">
      <div className="p-16 mx-auto w-full space-y-12 pb-20">
        <section className="relative">
          <h2 className="text-3xl font-bold text-black mb-8">
            {t("components.courses_page.title")}
          </h2>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Passamos o array já traduzido para o sub-componente */}
            <CursosSection courses={courses} />
          </div>
        </section>
      </div>
    </main>
  );
}
