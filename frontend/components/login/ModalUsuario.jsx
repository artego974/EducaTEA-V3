"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import IconsUsers from "../../public/images/icons/iconsUser.png";
import Link from "next/link";
import { useLanguage } from "@/frontend/context/LanguageContext"; // Importação do Contexto

export default function ModalUsuario({ isOpen, onClose }) {
  // Estados: 'selection' | 'login' | 'register' | 'register_step2'
  const [view, setView] = useState("selection");
  const [selectedTags, setSelectedTags] = useState([]);
  const { t } = useLanguage();

  useEffect(() => {
    if (!isOpen) {
      setView("selection");
      setSelectedTags([]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Lista de Tags usando IDs para tradução
  const tagsIds = [
    "admin",
    "developer",
    "student",
    "aee",
    "psychologist",
    "senac_rs",
    "teacher",
    "tutor",
    "person_tea",
    "tea_1",
    "tea_2",
    "tea_3",
  ];

  const toggleTag = (tagId) => {
    setSelectedTags((prev) =>
      prev.includes(tagId) ? prev.filter((t) => t !== tagId) : [...prev, tagId],
    );
  };

  const InputField = ({
    label,
    placeholder,
    type = "text",
    info,
    hasForgot,
  }) => (
    <div className="w-full">
      <label className="block text-lg font-bold text-black mb-1 text-left">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className="w-full mt-1 bg-[#D9D9D9] border-none rounded-[7px] font-medium placeholder:font-light p-3 pl-4 placeholder:text-[#828282] outline-none text-[15px]"
        />
        {hasForgot && (
          <button className="absolute right-3 mt-0.5 top-1/2 -translate-y-1/2 text-sm font-bold text-[#828282] uppercase">
            {t("components.user_modal.login.forgot_btn")}
          </button>
        )}
      </div>
      {info && (
        <p className="text-[12px] text-orange-600 mt-1 font-medium leading-tight">
          {info}
        </p>
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-[415px] bg-white rounded-[20px]  shadow-2xl flex flex-col items-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-8 right-5 text-2xl font-light text-gray-800"
        >
          <X />
        </button>

        {/* --- TELA 1: SELEÇÃO --- */}
        {view === "selection" && (
          <div className="w-full flex flex-col gap-1 animate-in fade-in duration-300">
            <h2 className="text-[26px] font-bold text-center border-b-2 border-[#D9D9D9] py-5 mb-5">
              {t("components.user_modal.selection.title")}
            </h2>
            <div className="p-6 pt-0">
              <button
                onClick={() => setView("register")}
                className="w-full bg-[#1A3879] text-white font-bold py-4 rounded-xl cursor-pointer"
              >
                {t("components.user_modal.selection.create_account")}
              </button>
              <div className="flex items-center my-5">
                <div className="flex-grow border-t-2 border-[#D9D9D9]"></div>
                <span className="px-3 text-[#828282] text-base">
                  {t("components.user_modal.selection.or")}
                </span>
                <div className="flex-grow border-t-2 border-[#D9D9D9]"></div>
              </div>
              <button
                onClick={() => setView("login")}
                className="w-full border-2 border-[#1A3879] text-[#1A3879] font-bold py-3.5 rounded-xl cursor-pointer"
              >
                {t("components.user_modal.selection.login")}
              </button>
              <p className="mt-3 text-center text-xs text-gray-500 px-4">
                {t("components.user_modal.selection.disclaimer")} <br />
                <Link href={"/termos"} className="font-bold underline">
                  {t("components.user_modal.selection.terms")}
                </Link>{" "}
                e{" "}
                <Link href={"/privacidade"} className="font-bold underline">
                  {t("components.user_modal.selection.privacy")}
                </Link>
              </p>
            </div>
          </div>
        )}

        {/* --- TELA 2: LOGIN --- */}
        {view === "login" && (
          <div className="w-full animate-in slide-in-from-right-4 duration-300">
            <h2 className="text-[26px] font-bold text-center border-b-2 border-[#D9D9D9] py-5 mb-5">
              {t("components.user_modal.login.title")}
            </h2>
            <div className="p-6 pt-0 flex flex-col gap-3">
              <InputField
                label={t("components.user_modal.login.email_label")}
                placeholder={t("components.user_modal.login.email_placeholder")}
                type="email"
              />
              <InputField
                label={t("components.user_modal.login.password_label")}
                placeholder={t(
                  "components.user_modal.login.password_placeholder",
                )}
                type="password"
                hasForgot
              />
              <button className="w-full bg-[#1A3879] text-white font-semibold py-3 rounded-xl mt-3 cursor-pointer">
                {t("components.user_modal.login.submit_btn")}
              </button>
              <button
                onClick={() => setView("selection")}
                className="w-full text-xs text-gray-400 underline mt-1 cursor-pointer"
              >
                {t("components.user_modal.login.back_btn")}
              </button>
            </div>
          </div>
        )}

        {/* --- TELA 3: CADASTRO PARTE 1 --- */}
        {view === "register" && (
          <div className="w-full animate-in slide-in-from-right-4 duration-300">
            <h2 className="text-[26px] font-bold text-center border-b-2 border-[#D9D9D9] py-5 mb-5">
              {t("components.user_modal.register_step1.title")}
            </h2>
            <div className="p-6 pt-0 flex flex-col gap-3">
              <InputField
                label={t("components.user_modal.register_step1.name_label")}
                placeholder={t(
                  "components.user_modal.register_step1.name_placeholder",
                )}
              />
              <InputField
                label={t("components.user_modal.register_step1.email_label")}
                placeholder={t("components.user_modal.login.email_placeholder")}
                type="email"
              />
              <InputField
                label={t("components.user_modal.register_step1.password_label")}
                placeholder="ex: a123456#"
                type="password"
              />
              <InputField
                label={t(
                  "components.user_modal.register_step1.repeat_password_label",
                )}
                placeholder="ex: Aa12345#"
                info={t("components.user_modal.register_step1.password_info")}
                type="password"
              />

              <button
                onClick={() => setView("register_step2")}
                className="w-full bg-[#1A3879] text-white font-bold py-4 rounded-xl mt-2 cursor-pointer"
              >
                {t("components.user_modal.register_step1.next_btn")}
              </button>

              <div className="flex items-center justify-center">
                <div className="flex gap-2 mt-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1A3879]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- TELA 4: PERSONALIZAÇÃO --- */}
        {view === "register_step2" && (
          <div className="w-full animate-in slide-in-from-right-4 duration-300">
            <h2 className="text-[26px] font-bold text-center border-b-2 border-[#D9D9D9] py-5 mb-5">
              {t("components.user_modal.register_step2.title")}
            </h2>
            <div className="p-6 pt-0 flex flex-col gap-3">
              <div className="w-full mb-3">
                <label className="block text-xl font-bold mb-4">
                  {t("components.user_modal.register_step2.icon_label")}
                </label>
                <div className="flex justify-between items-center">
                  <div className="w-20 h-20 bg-[#5B63B1] rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-md">
                    {/* Aqui entrará sua imagem do homem negro futuramente */}
                    <span className="text-white text-xs text-center p-1 cursor-pointer">
                      {t(
                        "components.user_modal.register_step2.icon_placeholder",
                      )}
                    </span>
                  </div>

                  <Image
                    src={IconsUsers}
                    className="w-66"
                    alt="Icones de usuários"
                  />
                </div>
              </div>

              <div className="w-full mb-8">
                <label className="block text-xl font-bold mb-4">
                  {t("components.user_modal.register_step2.tags_label")}
                </label>
                <div className="flex flex-wrap gap-2">
                  {tagsIds.map((tagId) => (
                    <button
                      key={tagId}
                      onClick={() => toggleTag(tagId)}
                      className={`px-5 cursor-pointer py-1 rounded-full text-sm font-medium transition-all ${
                        selectedTags.includes(tagId)
                          ? "bg-[#1A3879] text-white"
                          : "bg-black text-white hover:bg-gray-800"
                      }`}
                    >
                      {/* Traduz a tag baseado no ID */}
                      {t(`components.user_modal.tags.${tagId}`)}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full bg-[#1A3879] text-white font-bold py-4 rounded-xl shadow-lg cursor-pointer">
                {t("components.user_modal.register_step2.finish_btn")}
              </button>
              <button
                onClick={() => setView("register")}
                className="my-1 text-xs text-gray-400 underline cursor-pointer"
              >
                {t("components.user_modal.register_step2.back_btn")}
              </button>

              <div className="flex justify-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#1A3879]"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="fixed inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
}
