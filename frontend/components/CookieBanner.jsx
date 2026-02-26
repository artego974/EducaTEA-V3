"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/frontend/context/LanguageContext"; // Ajuste o caminho se necessário

const CookieBanner = () => {
  // Inicializamos como false para ele começar escondido
  const [isVisible, setIsVisible] = useState(false);

  // Hook de tradução
  const { t } = useLanguage();

  useEffect(() => {
    // Define o timer para mudar o estado após 5000ms (5 segundos)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    // Limpa o timer caso o componente seja desmontado antes dos 5 segundos
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/95 border border-gray-200 pb-8 p-6 shadow-2xl z-50 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {/* Texto Informativo */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-gray-800">
            {t("components.cookie_banner.title")}
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            {t("components.cookie_banner.text")}{" "}
            <a
              href="/cookies"
              className="text-blue-800 font-semibold hover:underline"
            >
              {t("components.cookie_banner.policy_link")}
            </a>
          </p>
        </div>

        {/* Botões de Ação */}
        <div className="grid grid-cols-3 gap-4 items-center">
          <button
            onClick={() => setIsVisible(false)}
            className="bg-[#1e3a8a] text-sm cursor-pointer hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
          >
            {t("components.cookie_banner.accept_btn")}
          </button>

          <button
            onClick={() => setIsVisible(false)}
            className="border border-gray-300 text-sm cursor-pointer hover:bg-gray-50 text-[#1e3a8a] font-semibold py-2 px-4 rounded-md transition-colors duration-200"
          >
            {t("components.cookie_banner.reject_btn")}
          </button>

          <Link
            href={"/cookies"}
            className="text-[#1e3a8a] font-semibold cursor-pointer hover:underline text-sm text-center"
          >
            {t("components.cookie_banner.what_are_cookies")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
