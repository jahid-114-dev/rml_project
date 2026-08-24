import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { AdminUser, AdminRole } from './types';
import { loginAdmin } from './client';

interface AuthSession {
  user: Omit<AdminUser, 'password'>;
}

interface AuthContextValue {
  session: AuthSession | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  hasRole: (...roles: AdminRole[]) => boolean;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);
const SESSION_KEY = 'rml_admin_session';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      if (raw) setSession(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    const user = await loginAdmin(email, password);
    if (!user) return false;
    const { password: _pw, ...safe } = user;
    const s: AuthSession = { user: safe };
    setSession(s);
    localStorage.setItem(SESSION_KEY, JSON.stringify(s));
    return true;
  };

  const logout = () => {
    setSession(null);
    localStorage.removeItem(SESSION_KEY);
  };

  const hasRole = (...roles: AdminRole[]) =>
    !!session && roles.includes(session.user.role);

  return (
    <AuthContext.Provider value={{ session, loading, login, logout, hasRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
