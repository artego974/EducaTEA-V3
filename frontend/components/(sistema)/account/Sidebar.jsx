"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  MonitorPlay,
  Award,
  Download,
  MessageSquare,
  LogOut,
} from "lucide-react";
import { useLanguage } from "@/frontend/context/LanguageContext"; // Importação do Contexto

import TextLogo from "../../../public/images/logos/TextLogo.webp";
import { useUser } from "@/frontend/context/UserContext";

export default function Sidebar() {
  const pathname = usePathname();
  const { t } = useLanguage(); // Hook de tradução
  const { logout } = useUser();

  // Array de menus com textos traduzidos
  const menuItems = [
    {
      name: t("components.sidebar.menu.general"),
      icon: Home,
      href: "/account",
    },
    {
      name: t("components.sidebar.menu.courses"),
      icon: MonitorPlay,
      href: "/account/cursos",
    },
    {
      name: t("components.sidebar.menu.certificates"),
      icon: Award,
      href: "/account/certificados",
    },
    {
      name: t("components.sidebar.menu.downloads"),
      icon: Download,
      href: "/account/downloads",
    },
    {
      name: t("components.sidebar.menu.community"),
      icon: MessageSquare,
      href: "/account/comunidade",
    },
  ];

  return (
    <aside className="w-64 border-r-2 border-[#D9D9D9] flex-shrink-0 flex flex-col text-[#BBC9DA] h-screen sticky top-0">
      {/* Logo Area */}
      <div className="p-6 pt-8">
        <Link href={"/account"}>
          <Image
            src={TextLogo}
            width={150}
            height={50}
            alt={t("components.sidebar.logo_alt")}
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 mt-4 overflow-y-auto">
        {menuItems.map((item, index) => {
          // Lógica de rota ativa (mantida igual)
          const isActive =
            item.href === "/account"
              ? pathname === item.href
              : pathname.startsWith(item.href);

          return (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center gap-4 mx-4 px-7 py-3 transition-colors ${
                isActive
                  ? "bg-[#292F64] text-[#BBC9DA] !ml-0 !mr-8 rounded-r-2xl"
                  : "hover:bg-[#5c69be] hover:text-[#BBC9DA] !ml-0 !mr-8 rounded-r-2xl"
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer / Logout */}
      <div className="p-6 border-t-2 border-[#D9D9D9]">
        <button
          onClick={logout}
          className="flex items-center gap-4 text-[#BBC9DA] hover:text-[#292F64] cursor-pointer transition-colors w-full"
        >
          <LogOut size={20} />
          <span>{t("components.sidebar.logout")}</span>
        </button>
      </div>
    </aside>
  );
}
