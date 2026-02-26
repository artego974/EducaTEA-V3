"use client";

import { useState } from "react";
import {
  Power,
  Volume2,
  Search,
  Type,
  Link2,
  Keyboard,
  ZoomIn,
  Plus,
  Minus,
  Redo2,
  Undo2,
  ChevronDown,
  EyeOff, 
  MousePointer2, 
  AlignLeft, 
  Contrast, 
  Sun, 
  MoveRight,
  Baseline,
  ScanLine,
  Languages,
  PauseCircleIcon,
  BookA,
  Home,
  Users2,
  FileText,
  LogIn,
  UserPlus2Icon,
  User2,
  Compass,
} from "lucide-react";
import Image from "next/image";
import TextLogo from "../../public/images/logos/TextLogo.webp"; 

import FlagBrasil from "../../public/images/languages/BR.webp"
import FlagPortugal from "../../public/images/languages/Portugal.webp"
import FlagAngola from "../../public/images/languages/Angola.webp"
import FlagUS from "../../public/images/languages/US.webp"
import FlagEspanha from "../../public/images/languages/ES.webp"
import FlagLatAm from "../../public/images/languages/LatAm.webp"

const languages = [
  {
    id: "pt-br",
    label: "Português (Brasil)",
    flag: FlagBrasil,
  },
  {
    id: "pt-pt",
    label: "Português (Portugal)",
    flag: FlagPortugal,
  },
  {
    id: "pt-ag",
    label: "Português (Angola)",
    flag: FlagAngola,
  },
  {
    id: "en-us",
    label: "English (US)",
    flag: FlagUS,
  },
  {
    id: "es-es",
    label: "Español",
    flag: FlagEspanha,
  },
  {
    id: "es-al",
    label: "Español (LatAm)",
    flag: FlagLatAm,
  },
];


export default function AcessibilidadeCard({ onClose }) {
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  return (
    <div 
  className="
    relative w-[450px] h-[75dvh] rounded-3xl py-4 px-3 flex flex-col text-white shadow-xl
    overflow-y-auto overflow-x-hidden
    /* Gradiente para o fundo: azul no topo (26%) e cinza no resto */
    bg-[#EAEAEA]
    z-0
    
    [&::-webkit-scrollbar]:w-0
  
  "
>{/* Camada de fundo fixada atrás de tudo */}
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#143A7B] from-[26%] via-[#EAEAEA] via-[26%] to-[#EAEAEA] pointer-events-none" />
      {/* Header Background */}

      <div className="flex items-center justify-end">
        <button onClick={onClose}>
          <ChevronDown className="w-6 h-6 text-white hover:text-gray-400 cursor-pointer" />
        </button>
      </div>

      <h2 className="text-center text-lg font-semibold my-5">
        Painel de Acessibilidade
      </h2>

      {/* Ações Rápidas */}
      <div className="flex gap-3 mb-4">
        <ActionButton icon={<Undo2 size={16} />} label="Voltar" />
        <ActionButton icon={<Power size={16} />} label="Desligar" />
        <ActionButton icon={<Redo2 size={16} />} label="Avançar" />
      </div>

      <div className="flex flex-col gap-4">

        <Section title="Idioma">
          <p className="text-[10px] text-gray-400 mb-3 px-1 font-bold uppercase tracking-widest">Selecione sua preferência</p>
  
  <div className="relative">
    {/* Botão de Seleção Estilizado */}
    <button
      onClick={() => setLangOpen(!langOpen)}
      className="
        w-full flex items-center justify-between gap-3
        bg-gray-50 p-4 rounded-2xl
        border border-gray-100
        hover:border-[#143A7B]/20 transition-all
      "
    >
      <div className="flex items-center gap-3">
        <Image
          src={selectedLang.flag}
          width={24}
          height={24}
          alt={selectedLang.label}
          className="rounded-sm shadow-sm"
        />
        <span className="text-sm font-bold text-gray-700">{selectedLang.label}</span>
      </div>
      <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
    </button>

    {/* Dropdown de Idiomas */}
      {langOpen && (
        <ul
          className="
            absolute left-0 right-0 mt-2
            bg-white border border-gray-100
            rounded-2xl shadow-xl shadow-gray-200/50
            overflow-hidden z-50
          "
        >
          {languages.map((lang) => (
            <li
              key={lang.id}
              onClick={() => {
                setSelectedLang(lang);
                setLangOpen(false);
              }}
              className="
                flex items-center gap-3
                px-4 py-3
                cursor-pointer
                hover:bg-blue-50
                transition-colors
              "
            >
              <Image
                src={lang.flag}
                width={20}
                height={20}
                alt={lang.label}
                className="rounded-sm"
              />
              <span className="text-xs font-bold text-gray-600">{lang.label}</span>
              {selectedLang.id === lang.id && (
                <div className="ml-auto size-2 bg-blue-500 rounded-full" />
              )}
            </li>
          ))}
        </ul>
      )}
  </div>
        </Section>

        <Section title="Opções Gerais">
          <div className="grid grid-cols-3 gap-3">
            {/* --- VISUAIS --- */}
            <Option icon={<Contrast />} label="Alto Contraste" />
            <Option icon={<Sun />} label="Modo Escuro" />
            <Option icon={<Baseline />} label="Espaçamento de Texto" />
            
            {/* --- FOCO E LEITURA --- */}
            <Option icon={<MoveRight />} label="Guia de Leitura" />
            <Option icon={<ScanLine />} label="Máscara de Leitura" />
            <Option icon={<AlignLeft />} label="Texto Alinhado" />

            {/* --- NAVEGAÇÃO E MOVIMENTO --- */}
            <Option icon={<MousePointer2 />} label="Cursor Gigante" />
            <Option icon={<PauseCircleIcon />} label="Parar Animações" />
            <Option icon={<BookA />} label="Dicionário" />

            {/* --- AS QUE VOCÊ JÁ TINHA --- */}
            <Option icon={<Volume2 />} label="Leitor de texto" />
            <Option icon={<Search />} label="Lupa" />
            <Option icon={<Type />} label="Fonte Legível" />
            <Option icon={<Link2 />} label="Destacar Links" />
            <Option icon={<Keyboard />} label="Teclado virtual" />
            <Option icon={<ZoomIn />} label="Ampliador de Texto" />
          </div>
        </Section>

        <Section title="Daltonismo">
          <div className="grid grid-cols-2 gap-3">
            <ColorCard label="Sem daltonismo" gradient="from-indigo-500 via-green-400 to-red-500" />
            <ColorCard label="Tritanopia" gradient="from-teal-500 to-red-500" />
            <ColorCard label="Protonopia" gradient="from-blue-700 to-yellow-400" />
            <ColorCard label="Deuteranopia" gradient="from-green-600 to-yellow-500" />
          </div>
        </Section>
        <Section title="Fácil Navegação">
          <div className="grid grid-cols-2 gap-3">
            {/* --- VISUAIS --- */}
            <Option icon={<Compass size={20} />} label="1. Inicial" active />
            <Option icon={<Users2 size={20} />} label="2. Comunidade" />
            <Option icon={<FileText size={20} />} label="3. Termos de uso" />
            <Option icon={<LogIn size={20} />} label="4. Entrar" />
            <Option icon={<UserPlus2Icon size={20} />} label="5. Cadastrar" />
            <Option icon={<User2 size={20} />} label="6. Conta" />
            </div>
        </Section>

        <Section title="Modelos prontos">
          <Model label="Pessoa cega" />
          <Model label="Pessoa TDAH" />
          <Model label="Pessoa Dislexa" />
          <Model label="Pessoa com Alta idade" />
          <Model label="Pessoa com Parkinson" />
        </Section>

        <div className="w-full flex items-center justify-center py-1">
           <Image src={TextLogo} className="w-24" alt="Logo" />
        </div>
      </div>
    </div>
  );
}

// ... (Mantenha o restante dos seus sub-componentes Section, ActionButton, etc. como estão)

function Section({ title, children }) {
    const [isOpen, setIsOpen] = useState(true);
  
    return (
      <div className="bg-white text-[#454545] rounded-2xl p-4 transition-all duration-300 shadow-sm border border-gray-100">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="font-semibold text-base">{title}</h3>
          <div className="size-6 bg-[#54536A] text-white flex items-center justify-center rounded-[6px] hover:bg-[#3f3e52] transition-colors">
            {isOpen ? <Minus size={14} /> : <Plus size={14} />}
          </div>
        </div>
  
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[1000px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
          {children}
        </div>
      </div>
    );
  }
  
  function ActionButton({ icon, label }) {
    return (
      <button className="flex items-center gap-1 bg-white text-[#143A7B] rounded-full px-3 py-1 text-sm font-medium flex-1 justify-center hover:bg-gray-100 transition-colors shadow-sm">
        {icon} {label}
      </button>
    );
  }
  
  function ColorCard({ label, gradient }) {
    return (
      <div className="bg-white rounded-lg p-2 border border-[#CFCFCF] hover:border-blue-300 transition-colors cursor-pointer group">
        <div className={`h-4 rounded mx-1 my-2 bg-gradient-to-r ${gradient} group-hover:scale-105 transition-transform`} />
        <p className="text-[10px] text-center font-medium">{label}</p>
      </div>
    );
  }
  
  function Option({ icon, label }) {
    return (
      <button className="bg-white cursor-pointer rounded-lg p-2.5 flex text-center justify-center flex-col items-center gap-2 text-[10px] border border-[#CFCFCF] text-[#1A3879] hover:bg-blue-50 hover:border-blue-400 transition-all min-h-[80px]">
        {icon}
        <span className="leading-tight">{label}</span>
      </button>
    );
  }
  
  function Model({ label }) {
    return (
      <div className="flex items-center justify-between py-2 border-b border-[#EFEFEF] last:border-none">
        <div className="flex items-center gap-2">
          <div className="size-5 rounded-full bg-[#E5E5E5]" />
          <span className="text-xs text-[#454545] font-medium">{label}</span>
        </div>
        <div className="relative flex items-center w-22 h-6 bg-[#e4e7eb] rounded-full text-[9px] cursor-pointer">
          <span className="absolute left-0 bg-white shadow-sm h-full w-1/2 flex items-center justify-center rounded-full z-10 text-[#454545] font-bold">OFF</span>
          <span className="absolute right-0 h-full w-1/2 flex items-center justify-center text-[#454545]">ON</span>
        </div>
      </div>
    );
  }