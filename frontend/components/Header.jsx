"use client";

import { useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

// Importações de imagens
import TextLogo from "@/public/images/logos/TextLogo.webp";
// DICA: Se tiver um logo branco, importe-o aqui (ex: TextLogoWhite) para usar no menu mobile!
import User from "@/public/images/icons/user.png";
import UserLoggedIcon from "@/public/images/avatars/avatar06.png";

import { User2 } from "lucide-react";

// Componentes
import { LanguageSelectHeader } from "./sub-components/LanguageSelectHeader";
import UserModal from "./login/ModalUsuario";

// Import do Hook de Tradução
import { useLanguage } from "@/frontend/context/LanguageContext";
import { useUser } from "@/frontend/context/UserContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user } = useUser();
  const { t } = useLanguage();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navItems = [
    { id: "presentation", href: "./#apresentacao" },
    { id: "fairs", href: "./#feiras" },
    { id: "works", href: "./#trabalhos" },
    { id: "community", href: "./#comunidade" },
    { id: "team", href: "./#equipe" },
  ];

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-500%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="h-[13dvh] sticky top-0 z-30 flex items-center justify-between px-6 md:px-10 bg-white border-b border-gray-200 text-black font-bold"
      >
        {/* LOGO */}
        <a href="./">
          <Image src={TextLogo} width={170} height={60} alt="Logo" />
        </a>

        {/* MENU DESKTOP - INTACTO */}
        <nav className="hidden md:flex items-center gap-x-10 list-none">
          <button className="bg-[#1A3879] text-white px-10 py-3 rounded-full">
            {t("components.header.play")}
          </button>

          {navItems.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer hover:opacity-80 text-sm uppercase"
            >
              <a href={item.href}>{t(`components.header.menu.${item.id}`)}</a>
            </li>
          ))}
        </nav>

        {/* AÇÕES DESKTOP - INTACTO */}
        <div className="hidden md:flex items-center gap-x-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="transition-opacity cursor-pointer hover:opacity-70 flex items-center justify-center"
            title={
              user?.isLoggedIn
                ? "Meu Perfil"
                : t("components.header.actions.open_profile")
            }
          >
            {user?.isLoggedIn ? (
              <Image
                src={UserLoggedIcon}
                width={50}
                height={50}
                alt="User Logged In"
                className="rounded-full p-1.5 object-cover bg-[#3E489C]"
              />
            ) : (
              <User2 width={45} height={30} alt="User Icon" />
            )}
          </button>

          <li className="list-none">
            <LanguageSelectHeader />
          </li>
        </div>

        {/* HAMBURGER MOBILE */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(true)}
        >
          <span className="w-6 h-0.5 bg-black rounded-full"></span>
          <span className="w-6 h-0.5 bg-black rounded-full"></span>
          <span className="w-6 h-0.5 bg-black rounded-full"></span>
        </button>
      </motion.header>

      {/* MENU MOBILE - CORES INVERTIDAS */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            /* Fundo escuro azul (#1A3879) e texto base branco */
            className="fixed inset-0 bg-[#1A3879] z-50 flex flex-col p-6 overflow-y-auto text-white"
          >
            {/* Header Mobile */}
            <div className="flex items-center justify-between mb-8">
              {/* Considere usar um logo branco aqui se o TextLogo original for preto */}
              <Image src={TextLogo} width={150} height={50} alt="Logo" />
              <button
                onClick={() => setOpen(false)}
                /* Botão de fechar invertido */
                className="p-2 text-white hover:text-gray-300 transition-colors"
                aria-label="Fechar menu"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Links de Navegação Mobile */}
            <nav className="flex flex-col gap-2 text-lg font-medium list-none flex-grow">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  /* Bordas divisórias agora são brancas e sutis */
                  className="border-b border-white/20 last:border-none"
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    /* Links brancos com hover suave */
                    className="block w-full py-4 text-white hover:text-gray-300"
                  >
                    {t(`components.header.menu.${item.id}`)}
                  </a>
                </motion.li>
              ))}
            </nav>

            {/* Área de Ações e Perfil Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-col gap-6"
            >
              {/* Botão Play invertido: Fundo branco, texto azul */}
              <button className="bg-white text-[#1A3879] py-4 px-6 rounded-full text-lg w-full font-bold shadow-md active:scale-95 transition-transform">
                {t("components.header.play")}
              </button>

              {/* Card de Usuário e Idioma invertido (fundo branco translúcido) */}
              <div className="flex items-center justify-between bg-white/10 p-4 rounded-2xl border border-white/20">
                <button
                  onClick={() => {
                    setOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="flex items-center gap-3 flex-1"
                >
                  {user?.isLoggedIn ? (
                    <>
                      <Image
                        src={UserLoggedIcon}
                        width={48}
                        height={48}
                        alt="Perfil Logado"
                        className="rounded-full object-cover border-2 border-white"
                      />
                      <div className="flex flex-col text-left">
                        <span className="text-sm font-bold text-white leading-tight">
                          {user?.name || "Meu Perfil"}
                        </span>
                        <span className="text-xs text-gray-300 mt-0.5">
                          Acessar conta
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Fundo do ícone deslogado ajustado */}
                      <div className="bg-white/20 p-2.5 rounded-full shadow-sm border border-white/30">
                        {/* Se o ícone 'User' original for escuro, o filtro invert o deixará claro */}
                        <Image
                          src={User}
                          width={24}
                          height={24}
                          alt="Perfil"
                          className="invert"
                        />
                      </div>
                      <span className="text-sm font-bold text-white">
                        Entrar / Cadastrar
                      </span>
                    </>
                  )}
                </button>

                {/* Divisor vertical invertido */}
                <div className="pl-4 ml-2 border-l border-white/20">
                  <LanguageSelectHeader />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* COMPONENTE DO MODAL */}
      <UserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
