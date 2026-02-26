'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// 1. Criamos o contexto
const UserContext = createContext();

// Objeto fixo para simular o banco de dados
const MOCK_USER = {
  name: "Arthur Juwer Rambo",
  email: "arthurjuwer@gmail.com",
  password: "123", // Apenas para exemplo
  profilePicture: "avatar06.png",
  country: "/images/languages/BR.webp",
  tags: ["Admin", "Dev", "Estudante", "Senac RS", "Tutor", "Tea"],
  isLoggedIn: true,
  colorBackground: "#FFF"
};

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulando o carregamento inicial (ex: verificando um token no cookie)
  useEffect(() => {
    // Aqui você faria a chamada ao seu banco de dados/API futuramente
    setTimeout(() => {
      setUser(MOCK_USER);
      setLoading(false);
    }, 1000);
  }, []);

  const login = (userData) => setUser({ ...userData, isLoggedIn: true });
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, setUser, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// Hook personalizado para facilitar o uso do contexto
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser deve ser usado dentro de um UserProvider');
  }
  return context;
}