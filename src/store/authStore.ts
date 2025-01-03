import { create } from 'zustand';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => void;
  resetPassword: (email: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    // Mock login
    const mockUser = {
      id: '1',
      email,
      name: email.split('@')[0],
    };
    set({ user: mockUser, isAuthenticated: true });
  },
  signup: async (email: string, password: string) => {
    // Mock signup
    const mockUser = {
      id: '1',
      email,
      name: email.split('@')[0],
    };
    set({ user: mockUser, isAuthenticated: true });
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
  resetPassword: async (email: string) => {
    // Mock password reset
    console.log('Password reset email sent to:', email);
  },
}));