"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/frontend/context/LanguageContext";

export default function LegalLayout({ children, title, date }) {
  const pathname = usePathname();
  const { t } = useLanguage();

  // Função auxiliar para verificar link ativo
  const isActive = (path) => pathname === path;

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* --- CABEÇALHO CLEAN --- */}
      <header className="bg-[#1A3879] text-white pt-12 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("components.legal_layout.back_home")}
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            {title}
          </h1>
          <p className="text-blue-200 text-sm">
            {t("components.legal_layout.last_updated")} {date}
          </p>
        </div>
      </header>

      {/* --- CORPO DA PÁGINA --- */}
      <div className="max-w-6xl mx-auto -mt-12 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* MENU LATERAL (Se for adicionar itens depois, lembre-se de usar o t() neles também) */}

          {/* CONTEÚDO DO TEXTO */}
          <main className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
            {/* Estilos globais de tipografia para o conteúdo legal */}
            <div className="prose prose-blue max-w-none prose-headings:text-[#1A3879] prose-a:text-[#1A3879]">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
