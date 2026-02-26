"use client";

import Image from "next/image";
import { useLanguage } from "@/frontend/context/LanguageContext"; // Import Context
import CursosSection from "@/frontend/components/(sistema)/account/CursosSection";
import AccountCommentCard from "@/frontend/components/(sistema)/account/AccountCommentCard";

import BrasilFlag from "../../../public/images/languages/BR.webp";
import avatar01 from "../../../public/images/avatars/avatar01.png";
import avatar02 from "../../../public/images/avatars/avatar02.png";
import avatar03 from "../../../public/images/avatars/avatar03.png";
import avatar04 from "../../../public/images/avatars/avatar04.png";
import avatar05 from "../../../public/images/avatars/avatar05.png";
import avatar07 from "../../../public/images/avatars/avatar07.png";
import Avatar06 from "../../../public/images/avatars/avatar06.png";
import Pdf from "../../../public/images/icons/pdf.png";
import Forms from "../../../public/images/icons/forms.png";
import Drive from "../../../public/images/icons/drive.png";

import { Pencil, Clock, Star } from "lucide-react";
import { useUser } from "@/frontend/context/UserContext";

export default function AccountPage() {
  const { t } = useLanguage();
  const { user } = useUser();

  // Array de chaves para as badges
  const badgeKeys = user?.tags;
  // const badgeKeys = ['admin', 'dev', 'student', 'senac', 'tutor', 'tea'];

  // Comentários mantidos fixos (simulação de DB)
  const comments = [
    {
      text: "Projeto incrível! Vai ajudar muitos professores a trabalharem de forma mais inclusiva. 👏",
      author: "João Guilherme",
      image: avatar01,
    },
    {
      text: "Adorei a ideia! Muito importante trazer tecnologia para apoiar alunos com TEA.",
      author: "Maria Clara",
      image: avatar02,
    },
    {
      text: "Sensacional! Esse jogo tem um propósito lindo e educativo. 💙",
      author: "Pedro Henrique",
      image: avatar03,
    },
    {
      text: "Parabéns pela iniciativa! Educação inclusiva transforma vidas.",
      author: "Ana Beatriz",
      image: avatar04,
    },
    {
      text: "Que orgulho ver estudantes criando algo tão impactante. 🚀",
      author: "Lucas Andrade",
      image: avatar05,
    },
  ];

  // Cursos traduzidos via Contexto (reutilizando chaves do courses_page ou criando novas se preferir)
  // Aqui estou usando chaves genéricas para consistência
  const courses = [
    {
      image: avatar02,
      title: t("components.courses_page.course_1"), // Reutilizando tradução existente ou usar a nova card_title
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

  // Certificados traduzidos
  const certificates = [
    {
      image: avatar02,
      title: t("components.account_page.certificates.card_title"),
      subtitle: t("components.account_page.certificates.card_subtitle"),
      time: "08h",
      rating: "4.7",
    },
  ];

  // Botões de download traduzidos
  const buttons = [
    {
      id: "pdf",
      label: t("components.account_page.downloads.buttons.license"),
      color: "#F91818",
      icon: Pdf,
    },
    {
      id: "forms",
      label: t("components.account_page.downloads.buttons.forms"),
      color: "#5A3E9C",
      icon: Forms,
    },
    {
      id: "drive",
      label: t("components.account_page.downloads.buttons.drive"),
      color: "#0B7E13",
      icon: Drive,
    },
  ];

  return (
    <main className="flex flex-col min-h-screen">
      <div className="p-16 mx-auto w-full space-y-12 pb-20">
        {/* Seção 1: Meu Perfil */}
        <section>
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-bold text-black">
              {t("components.account_page.profile.title")}
            </h2>
            <button className="bg-[#292F65] text-white px-10 cursor-pointer py-2 rounded-2xl font-medium hover:bg-[#1e233b] transition">
              {t("components.account_page.profile.edit_btn")}
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Avatar Grande */}
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-[#2e3457] p-1 border-4 border-slate-100">
                <Image
                  src={Avatar06}
                  className="absolute -translate-1/2 left-1/2 top-1/2 w-38 rounded"
                  alt="Avatar"
                />
                <div className="w-full h-full rounded-full bg-[#3E489C] overflow-hidden"></div>
              </div>
              <button className="absolute bottom-2 right-3 bg-[#2e3457] hover:bg-[#474e74] p-2 px-2.5 rounded-xl text-white border-2 border-white cursor-pointer">
                <Pencil size={18} />
              </button>
            </div>

            {/* Informações do Usuário */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <h3 className="text-2xl font-bold text-slate-900">
                  {user?.name}
                </h3>
                <Image
                  src={user?.country}
                  width={32}
                  height={32}
                  className="rounded-sm"
                  alt="País"
                />
              </div>
              <p className="text-slate-600 text-base font-medium mb-3">
                {user?.email}
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {badgeKeys?.map((key, idx) => (
                  <span
                    key={idx}
                    className="bg-black text-white text-[12px] px-5 py-1 rounded-full font-bold"
                  >
                    {t(`${key}`)}
                    {/* {t(`components.account_page.profile.badges.${key}`)} */}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <span className="bg-[#D9D9D9] block w-full h-0.5 rounded-2xl" />

        {/* Seção 2: Minha Atividade */}
        <section className="relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-black mb-2">
              {t("components.account_page.activity.title")}
            </h2>
            <div className="flex gap-2">
              <button className="bg-[#292F65] text-white px-12 cursor-pointer py-2 rounded-2xl text-sm font-medium">
                {t("components.account_page.activity.btn_courses")}
              </button>
              <button className="bg-white border-2 cursor-pointer border-[#2e3457] text-[#2e3457] px-8 py-2 rounded-2xl text-sm font-semibold hover:bg-gray-50">
                {t("components.account_page.activity.btn_comments")}
              </button>
            </div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
            <CursosSection courses={courses} />
          </div>
        </section>

        <span className="bg-[#D9D9D9] block w-full h-0.5 rounded-2xl" />

        {/* Seção 5: Certificados */}
        <section>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-black mb-8">
              {t("components.account_page.certificates.title")}
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
                    alt="Avatar do Curso"
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
                  {t("components.account_page.certificates.download_btn")}
                </button>
              </div>
            ))}
          </div>
        </section>

        <span className="bg-[#D9D9D9] block w-full h-0.5 rounded-2xl" />

        {/* Seção 3: Comentários */}
        <section>
          <h2 className="text-3xl font-bold text-black mb-8">
            {t("components.account_page.fav_comments.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {comments.map((comment, index) => (
              <div key={index}>
                <AccountCommentCard
                  text={comment.text}
                  author={comment.author}
                  image={comment.image.src}
                />
              </div>
            ))}
          </div>
        </section>

        <span className="bg-[#D9D9D9] block w-full h-0.5 rounded-2xl" />

        {/* Seção 4: Materiais */}
        <section>
          <h2 className="text-3xl font-bold text-black mb-8">
            {t("components.account_page.downloads.title")}
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
