import Footer from "@/frontend/components/Footer";
import Header from "@/frontend/components/Header";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import ChatbotWidget from "@/frontend/components/chatbot/ChatbotWidget";
import AcessibilidadeWidget from "@/frontend/components/acessibilidade/AcessibilidadeWidget";
import { LanguageProvider } from "@/frontend/context/LanguageContext";
import favicon from "./favicon.ico";
import { UserProvider } from "@/frontend/context/UserContext";
// Remova o import do favicon aqui. O Next.js busca arquivos estáticos pela string.

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "EducaTEA",
  description: "Plataforma educacional EducaTEA",
  icons: { icon: favicon.src },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <UserProvider>
        <LanguageProvider>
          <body className={`${dmSans.className} z-0 relative antialiased`}>
            <Header />
            {children}
            <div className="z-40 fixed right-5 bottom-10">
              <ChatbotWidget />
              <AcessibilidadeWidget />
            </div>
            <Footer />
          </body>
        </LanguageProvider>
      </UserProvider>
    </html>
  );
}
