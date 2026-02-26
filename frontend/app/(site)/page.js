"use client"; // 1. Obrigatório porque usamos hooks (useLanguage)

// 2. Novos imports necessários
import { useLanguage } from "@/frontend/context/LanguageContext";
import LoadingScreen from "@/frontend/components/LoadingScreen"; // Certifique-se de ter criado este componente

// Seus imports existentes
import CookieBanner from "@/frontend/components/CookieBanner";
import Fair from "@/frontend/components/Fair";
import FairLogos from "@/frontend/components/FairLogos";
import Forum from "@/frontend/components/Forum";
import GameCard from "@/frontend/components/GameCard";
import MainContent from "@/frontend/components/MainContent";
import Searches from "@/frontend/components/Searches";
import Slider from "@/frontend/components/Slider";
import Team from "@/frontend/components/Team";
import { useUser } from "@/frontend/context/UserContext";

export default function Home() {
  // 3. Buscamos o estado de carregamento do contexto
  const { isLoading } = useLanguage();

  // 4. Bloqueio de segurança: Se estiver lendo o localStorage, mostra o Loading
  if (isLoading) {
    return <LoadingScreen />;
  }

  // 5. Se já carregou, mostra o site normal
  return (
    <div className="z-0">
      <CookieBanner />
      <MainContent />
      <section className="relative bg-gradient-to-br from-[#0B1623] to-[#050B14] flex flex-col gap-20 items-center justify-center py-15">
        <GameCard />
        <Fair />
        <FairLogos />
        <Searches />
        <Slider />
        <div className="absolute w-full h-[300px] bottom-0 bg-white z-0"></div>
      </section>
      <Forum />
      <Team />
    </div>
  );
}
