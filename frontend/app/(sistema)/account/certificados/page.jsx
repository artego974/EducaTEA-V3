"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/frontend/context/LanguageContext"; // Importação do Contexto
import avatar02 from "../../../../public/images/avatars/avatar02.png";
import { Clock, Star } from "lucide-react";

export default function Certificados() {
  const { t } = useLanguage();

  // Array definido dentro do componente para usar as traduções
  const certificates = [
    {
      image: avatar02,
      title: t("components.certificates.card_1.title"),
      subtitle: t("components.certificates.card_1.subtitle"),
      time: "08h",
      rating: "4.7",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen">
      <div className="p-16 mx-auto w-full space-y-12 pb-20">
        <section>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-black mb-8">
              {t("components.certificates.title")}
            </h2>

            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className="border-2 border-[#D6E1ED] w-10/12 rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-6 bg-white"
              >
                <div className="flex items-center gap-6 w-full md:w-auto">
                  {/* Avatar */}
                  <Image
                    src={cert.image}
                    alt={t("components.certificates.avatar_alt")}
                    className="w-20 h-20 rounded-full bg-yellow-100"
                  />

                  {/* Texto */}
                  <div className="flex flex-col gap-1">
                    <div>
                      <h3 className="font-bold text-[#092B53] text-lg leading-tight">
                        {cert.title}
                      </h3>
                      <p className="font-bold text-[#092B53] text-lg leading-tight">
                        {cert.subtitle}
                      </p>
                    </div>

                    {/* Metadata (Tempo e Avaliação) */}
                    <div className="flex items-center gap-4 text-[#BBC9DA] mt-1">
                      <div className="flex items-center gap-1.5">
                        <Clock size={20} className="text-[#BBC9DA]" />
                        <span className="font-bold text-lg">{cert.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Star
                          size={20}
                          className="fill-[#BBC9DA] text-[#BBC9DA]"
                        />
                        <span className="font-bold text-lg">{cert.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botão Baixar */}
                <button className="w-full cursor-pointer md:w-auto border-2 border-[#0B7E13] text-[#0B7E13] font-bold py-3 px-10 rounded-2xl hover:bg-green-50 transition whitespace-nowrap">
                  {t("components.certificates.download_btn")}
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
