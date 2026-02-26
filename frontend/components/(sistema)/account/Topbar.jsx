"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/frontend/context/LanguageContext"; // Importe o contexto
import { LanguageSelectHeader } from "@/frontend/components/sub-components/LanguageSelectHeader";

// Imagens
import Avatar06 from "../../../public/images/avatars/avatar06.png";
import { useUser } from "@/frontend/context/UserContext";

export default function Topbar() {
  const { user, loading } = useUser();

  if (loading) return <p>Carregando perfil...</p>;

  if (!user) return <p>Usuário não está logado.</p>;

  const { t } = useLanguage();

  return (
    <header className="flex justify-between items-center p-6 border-b-2 border-[#D9D9D9] bg-white sticky top-0 z-10">
      <div className="flex items-center gap-4 ml-auto">
        <div className="size-12 rounded-full p-0.5 bg-[#3E489C] overflow-hidden border-2 border-slate-200">
          <Image
            src={Avatar06}
            className="object-cover h-full w-full"
            alt={t("components.topbar.avatar_alt")}
          />
        </div>

        <LanguageSelectHeader />
      </div>
    </header>
  );
}
