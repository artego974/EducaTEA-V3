"use client";
import React, { useState } from "react";
import { Play, Share2, ImageIcon } from "lucide-react"; 
export default function Noticias() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className=" bg-[#1A3879] flex items-center justify-center py-12">
<div className="max-w-7xl flex items-center justify-center flex-col gap-10 text-white w-full">
        {/* Container de Texto e Conteúdo */}
        <div className="flex flex-col gap-2 w-full">
          <p className="text-lg font-medium opacity-90">Entrevista - Por Laura e Alissa</p>
          <h2 className="text-4xl lg:text-6xl font-black leading-tight tracking-wide lg:w-11/12 mt-2">
            PSC em Ação: Professores do Fundamental I explicam iniciativas
            e destacam projetos do ano!
          </h2>
          <p className="text-lg mt-4 opacity-80">12/05/2025 06:00</p>
        </div>

        {/* Área da Linha e Ícone de Compartilhar */}
        <div className="flex w-full items-center gap-5 mt-4 group">
          <div className="border-4 border-white rounded-full p-4 hover:scale-105 transition-transform cursor-pointer ">
            <Play fill="white" className="size-6" />
          </div>
          
          <div className="flex w-full items-center gap-3 relative">
            <h2 className="font-semibold absolute -top-6 text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                Ouça agora
            </h2>
            <p className="text-sm font-mono">00:00</p>
            {/* Barra de progresso visual */}
            <div className="w-full h-1.5 bg-white/30 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-white rounded-full"></div>
            </div>
            <p className="text-sm font-mono">04:21</p>
            
            <div className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors ml-2">
              <Share2 className="w-5 h-5 cursor-pointer text-[#1A3879]" />
            </div>
          </div>
        </div>
      </div>
      </div>
      

      {/* --- SEÇÃO DE CONTEÚDO (Parte Estilizada) --- */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        
        {/* Título da Seção */}
        <div className="mb-10 border-b pb-4 border-gray-200">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#1A3879] uppercase tracking-wider">
            Revista Competência
            </h1>
        </div>

        <div className="flex flex-col gap-8 text-gray-700 text-lg leading-relaxed text-justify">
          
          <p>
            O <span className="font-bold text-[#1A3879] bg-blue-50 px-1 rounded">JOGO EDUCACIONAL EDUCATEA</span> é 
            um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto 
            fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou 
            uma bandeja de tipos e os misturou para criar um livro de amostras de tipos.
            Ele sobreviveu não apenas a cinco séculos, mas também à transição para a editoração 
            eletrônica, permanecendo essencialmente inalterado. 
          </p>

          <p>
            Foi popularizado na década de 1960 com o lançamento de folhas Letraset contendo passagens 
            de Lorem Ipsum e, mais recentemente, com softwares de editoração eletrônica como o Aldus PageMaker.
          </p>

          {/* --- Bloco de Imagem em Destaque --- */}
          <figure className="my-8 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            {/* Placeholder de imagem (substitua src={""} pela sua imagem real) */}
            <div className="w-full h-64 bg-gray-200 relative flex items-center justify-center">
                {/* Lógica para quando não houver imagem ainda */}
                <ImageIcon className="text-gray-400 w-16 h-16" />
                {/* <Image 
                    src={SuaImagemAqui} 
                    alt="Alunos jogando" 
                    className="object-cover w-full h-full" 
                  /> 
                */}
            </div>
            
            <figcaption className="p-6 border-l-4 border-[#1A3879]">
              <h3 className="text-xl font-bold text-[#1A3879] mb-1">
                Aplicação do Jogo na Escola Senac São Leopoldo
              </h3>
              <p className="text-sm text-gray-500 italic flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gray-400 block"></span>
                Imagem: Arthur Juwer Rambo e Arthur Cidade
              </p>
            </figcaption>
          </figure>
          {/* ---------------------------------- */}

          <p>
            O Lorem Ipsum é um texto fictício da indústria tipográfica e de impressão. Tem sido o texto 
            fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma 
            bandeja de tipos e os misturou para criar um livro de amostras de tipos.
          </p>
        </div>

      </div>
    </div>
  );
}