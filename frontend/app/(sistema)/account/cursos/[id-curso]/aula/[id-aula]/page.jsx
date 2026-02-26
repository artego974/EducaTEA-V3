"use client";

import {
  ThumbsUp,
  ThumbsDown,
  Share2,
  Bookmark,
  Folder,
  Scissors,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Eye,
  Circle,
  Clock,
  Star,
  Play,
  CheckCircle2,
} from "lucide-react";

import avatar01 from "@/public/images/avatars/avatar01.png";
import avatar02 from "@/public/images/avatars/avatar02.png";
import avatar03 from "@/public/images/avatars/avatar03.png";
import avatar04 from "@/public/images/avatars/avatar04.png";
import avatar05 from "@/public/images/avatars/avatar05.png";
import Avatar06 from "@/public/images/avatars/avatar06.png";
import avatar07 from "@/public/images/avatars/avatar07.png";

import { motion } from "framer-motion";
import Image from "next/image";
import youtubeIcon from "@/public/images/icons/Youtube.png";
import Link from "next/link";
import { useLanguage } from "@/frontend/context/LanguageContext"; // Import Context

export default function AulaPage({ params }) {
  const { t } = useLanguage();

  // Mock de dados com tradução dinâmica no prefixo "Aula"
  const lessons = [
    {
      id: 1,
      title: `${t("components.lesson_page.lesson_prefix")}#1`,
      time: "4min",
      status: "completed",
    },
    {
      id: 2,
      title: `${t("components.lesson_page.lesson_prefix")}#2`,
      time: "7min",
      status: "completed",
    },
    {
      id: 3,
      title: `${t("components.lesson_page.lesson_prefix")}#3`,
      time: "10min",
      status: "current",
    },
    {
      id: 4,
      title: `${t("components.lesson_page.lesson_prefix")}#4`,
      time: "2min",
      status: "pending",
    },
    {
      id: 5,
      title: `${t("components.lesson_page.lesson_prefix")}#5`,
      time: "16min",
      status: "pending",
    },
    {
      id: 6,
      title: `${t("components.lesson_page.lesson_prefix")}#6`,
      time: "18min",
      status: "pending",
    },
    {
      id: 7,
      title: `${t("components.lesson_page.lesson_prefix")}#7`,
      time: "10min",
      status: "pending",
    },
    {
      id: 8,
      title: `${t("components.lesson_page.lesson_prefix")}#8`,
      time: "12min",
      status: "pending",
    },
  ];

  return (
    <div className="w-full max-w-[1600px] max-h-[90dvh] mx-auto p-4 lg:pt-8 lg:p-8 bg-white h-screen overflow-hidden flex flex-col">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 h-full">
        <div className="xl:col-span-8 flex flex-col gap-6 h-[calc(100vh-6rem)] overflow-y-auto pr-4 scrollbar-hidden pb-20">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {t("components.lesson_page.video_title")}
            </h1>
            <nav className="text-sm text-gray-500 font-medium">
              <Link href={"/account/cursos"}>
                {" "}
                {t("components.lesson_page.breadcrumb")}{" "}
              </Link>
              <span className="mx-2">›</span>
              <span className="text-blue-900 font-bold">
                {t("components.lesson_page.lesson_prefix")}#3
              </span>
            </nav>
          </div>

          {/* Player de Vídeo */}
          <div className="w-full aspect-video bg-[#D9D9D9] rounded-lg relative flex items-center justify-center group cursor-pointer overflow-hidden shrink-0">
            <Image src={youtubeIcon} alt="Play Video" />
          </div>

          {/* Barra de Ações */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b-2 border-[#D6E1ED]">
            <div className="flex items-center gap-2 flex-wrap">
              <ActionButton icon={ThumbsUp} label="6,3 mil" active />
              <ActionButton icon={ThumbsDown} />
              <ActionButton
                icon={Share2}
                label={t("components.lesson_page.actions.share")}
              />
              <ActionButton
                icon={Bookmark}
                label={t("components.lesson_page.actions.save")}
              />
              <ActionButton
                icon={Folder}
                label={t("components.lesson_page.actions.material")}
              />
              <ActionButton
                icon={Scissors}
                label={t("components.lesson_page.actions.clip")}
              />
              <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
                <MoreHorizontal size={20} />
              </button>
            </div>

            <div className="flex items-center gap-3 text-xs font-semibold text-gray-100">
              <span className="bg-[#1e293b] px-3 py-1.5 rounded-md">
                {t("components.lesson_page.meta.time_ago_mock")}
              </span>
              <span className="bg-[#1e293b] px-3 py-1.5 rounded-md">
                1k {t("components.lesson_page.meta.views")}
              </span>
            </div>
          </div>

          {/* Comentários */}
          <div className="pt-2">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold text-[#1e293b]">
                30 {t("components.lesson_page.comments.title")}
              </h3>
              <button className="flex items-center gap-1 text-sm text-[#BBC9DA] hover:text-gray-600">
                <span className="mb-2 text-lg">≡</span>{" "}
                {t("components.lesson_page.comments.sort")}
              </button>
            </div>

            <div className="space-y-8">
              <CommentItem
                avatarImage={Avatar06.src}
                name="Arthur Juwer"
                date={t("components.lesson_page.meta.time_ago_mock")}
                avatarColor="bg-[#3E489C]"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              />
              <CommentItem
                avatarImage={avatar07.src}
                name="Arthur Cidade"
                date="Há 1 mês"
                avatarColor="bg-[#D38A3E]"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              />
              <CommentItem
                avatarImage={avatar01.src}
                name="Maria Silva"
                date="Há 2 dias"
                avatarColor="bg-green-700"
                text="Excelente aula! Muito didático."
              />
              <CommentItem
                avatarImage={avatar05.src}
                name="João Pedro"
                date="Há 1 semana"
                avatarColor="bg-red-900"
                text="Poderia explicar melhor a parte do Firebase hooks?"
              />
            </div>
          </div>
        </div>

        {/* =======================================================
            COLUNA DIREITA (Fixa) - Ocupa 4/12
           ======================================================= */}
        <div className="xl:col-span-4 h-full pb-36 flex flex-col gap-6">
          {/* Botões de Navegação */}
          <div className="flex gap-3 h-12 shrink-0">
            <button className="w-12 h-full flex items-center justify-center border-2 border-gray-300 rounded-lg text-[#092B53] hover:bg-gray-50 transition">
              <ChevronLeft size={24} />
            </button>
            <button className="w-12 h-full flex items-center justify-center border-2 border-gray-300 rounded-lg text-[#092B53] hover:bg-gray-50 transition">
              <ChevronRight size={24} />
            </button>
            <button className="flex-1 h-full flex items-center justify-center gap-2 border-2 border-blue-900/30 text-[#092B53] font-semibold rounded-lg hover:bg-blue-50 transition">
              <CheckCircle size={20} />
              {t("components.lesson_page.actions.lesson_finished")}
            </button>
          </div>

          {/* Card de Progresso */}
          <div className="relative border-2 border-[#D6E1ED] rounded-xl p-5 bg-white shrink-0">
            <div className="flex items-center gap-4 mb-0">
              <Image src={avatar07} alt="" className="w-20" />
              <div>
                <h4 className="font-bold text-[#092B53] text-xl leading-tight">
                  {t("components.lesson_page.sidebar.card_title")}
                </h4>
              </div>
            </div>

            <div className="pt-2 pb-1">
              <div className="flex items-center justify-between text-xs font-bold text-[#0B7E13] mb-1">
                <span className="w-full text-right">95%</span>
              </div>
              <div className="absolute left-0 w-full overflow-hidden h-1 mb-4 text-xs flex bg-gray-200">
                <div
                  style={{ width: "95%" }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#0B7E13]"
                ></div>
              </div>
            </div>

            <div className="flex items-center justify-between font-bold text-[#BBC9DA] border-t border-gray-100 pt-3">
              <div className="flex items-center gap-1">
                <Clock size={16} /> 03h
              </div>
              <div className="flex items-center gap-1 text-[#BBC9DA]">
                <Star size={16} fill="currentColor" /> 4.9
              </div>
            </div>
          </div>

          {/* Lista de Aulas */}
          <div className="border-2 border-[#D6E1ED] rounded-xl overflow-hidden bg-white overflow-y-auto flex-1 custom-scrollbar">
            {lessons.map((lesson) => (
              <div
                key={lesson.id}
                className={`flex items-center justify-between p-4 border-b-2 last:border-0 border-gray-100 hover:bg-gray-50 transition cursor-pointer
                      ${lesson.status === "current" ? "bg-blue-50/50" : "bg-white"}
                    `}
              >
                <div className="flex items-center gap-3">
                  <div className="text-[#BBC9DA]">
                    {lesson.status === "completed" && (
                      <CheckCircle2 className="text-[#0B7E13]" size={20} />
                    )}
                    {lesson.status === "current" && (
                      <Eye className="text-[#092B53]" size={20} />
                    )}
                    {lesson.status === "pending" && (
                      <Circle className="text-[#BBC9DA]" size={20} />
                    )}
                  </div>
                  <span
                    className={`text-sm ${lesson.status === "current" ? "font-bold text-[#092B53]" : "text-[#BBC9DA] font-semibold"}`}
                  >
                    {lesson.title}
                  </span>
                </div>
                <span
                  className={`text-sm ${lesson.status === "current" ? "font-bold text-[#092B53]" : "text-[#BBC9DA]"}`}
                >
                  {lesson.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Estilos CSS para a barra de rolagem */}
      <style jsx global>{`
        .scrollbar-hidden::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-hidden::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-hidden::-webkit-scrollbar-thumb {
          background-color: transparent;
          border-radius: 20px;
        }
        .scrollbar-hidden::-webkit-scrollbar-thumb:hover {
          background-color: transparent;
        }
      `}</style>
    </div>
  );
}

// --- Componentes Auxiliares ---

function ActionButton({ icon: Icon, label, active = false }) {
  return (
    <button
      className={`
        flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer
        ${active ? "bg-[#092B53] text-white" : "bg-[#092B53] text-white"}
      `}
    >
      <Icon size={16} className={active ? "fill-white" : ""} />
      {label && <span>{label}</span>}
    </button>
  );
}

function CommentItem({ name, date, text, avatarColor, avatarImage }) {
  // Adicionei o hook aqui também para traduzir os botões de ação do comentário
  const { t } = useLanguage();

  return (
    <div className="flex gap-4">
      <div
        className={`size-14 p-1.5 flex items-center justify-center rounded-full ${avatarColor} border-2 border-white overflow-hidden`}
      >
        <img src={avatarImage} alt={name} />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="text-sm font-bold text-[#092B53]">{name}</h4>
          <span className="text-xs text-[#BBC9DA]">{date}</span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">{text}</p>
        <div className="flex items-center gap-3">
          <button className="bg-[#092B53] text-white text-[10px] font-bold px-3 py-1 rounded-full">
            {t("components.lesson_page.comments.view_replies")}
          </button>
          <button className="text-[#092B53] text-[10px] font-bold hover:underline">
            {t("components.lesson_page.comments.reply")}
          </button>
        </div>
      </div>
    </div>
  );
}
