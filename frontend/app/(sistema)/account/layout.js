import { DM_Sans } from "next/font/google";
import Sidebar from "@/frontend/components/(sistema)/account/Sidebar";
import Topbar from "@/frontend/components/(sistema)/account/Topbar";
import ChatbotWidget from "@/frontend/components/chatbot/ChatbotWidget";
import AcessibilidadeWidget from "@/frontend/components/acessibilidade/AcessibilidadeWidget";
import "../globals.css";
import { LanguageProvider } from "@/frontend/context/LanguageContext";
import favicon from "../favicon.ico";
import { UserProvider } from "@/frontend/context/UserContext";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "EducaTEA - Área do Aluno",
  description: "Plataforma educacional EducaTEA",
  icons: { icon: favicon.src },
};

export default function SistemaLayout({ children }) {
  return (
    <html lang="pt-BR">
      <UserProvider>
        <LanguageProvider>
          <body
            className={`${dmSans.className} antialiased flex h-screen overflow-hidden bg-white`}
          >
            <Sidebar />
            <div className="flex-1 overflow-y-auto relative z-0">
              <Topbar />
              {children}
            </div>
            <div className="z-50 fixed right-5 bottom-10 flex flex-col gap-4">
              <ChatbotWidget />
              <AcessibilidadeWidget />
            </div>
          </body>
        </LanguageProvider>
      </UserProvider>
    </html>
  );
}
