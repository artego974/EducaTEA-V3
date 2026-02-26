'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext(null);

const API_URL = "http://localhost:3001";

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Carrega usuário ao iniciar
  useEffect(() => {
    async function loadUser() {
      try {
        const response = await fetch(`${API_URL}/user/1`); // exemplo fixo
        if (!response.ok) throw new Error();
        const data = await response.json();
        setUser(data);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  const login = async (email , password) => {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      throw new Error("Login inválido");
    }

    const data = await response.json();
    setUser(data);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser deve ser usado dentro de um UserProvider');
  }
  return context;
}