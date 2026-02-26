"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/frontend/context/LanguageContext"; // Importação do Contexto

// Ícones
import Pdf from "../../../../public/images/icons/pdf.png";
import Forms from "../../../../public/images/icons/forms.png";
import Drive from "../../../../public/images/icons/drive.png";

export default function Downloads() {
  const { t } = useLanguage();

  // Array recriado dentro do componente para acessar a função t()
  const buttons = [
    {
      id: "pdf",
      label: t("components.downloads.buttons.license"),
      color: "#F91818",
      icon: Pdf,
    },
    {
      id: "forms",
      label: t("components.downloads.buttons.forms"),
      color: "#5A3E9C",
      icon: Forms,
    },
    {
      id: "drive",
      label: t("components.downloads.buttons.drive"),
      color: "#0B7E13",
      icon: Drive,
    },
  ];

  return (
    <main className="flex flex-col min-h-screen">
      <div className="p-16 mx-auto w-full space-y-12 pb-20">
        <section>
          <h2 className="text-3xl font-bold text-black mb-8">
            {t("components.downloads.title")}
          </h2>

          <div className="flex gap-4 items-center font-semibold flex-wrap">
            {buttons.map((btn) => {
              return (
                <button
                  key={btn.id}
                  className="relative cursor-pointer flex items-center justify-center gap-2 border-2 rounded-lg h-12 w-56 overflow-hidden hover:opacity-80 transition-opacity"
                  style={{
                    borderColor: btn.color,
                  }}
                >
                  {/* Icon */}
                  <div className="absolute left-4">
                    <Image src={btn.icon} alt="" className="w-5" />
                  </div>

                  {/* Text */}
                  <span className="text-sm font-semibold text-black">
                    {btn.label}
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
