'use client';
import React, {
  createContext,
  useContext,
  useRef,
  type ReactNode,
} from 'react';

interface HistoryContextType {
  addToHistory: (productId: number) => void;
  getHistory: () => number[];
}

const NavigationHistoryContext = createContext<HistoryContextType | undefined>(
  undefined,
);

export const HistoryProvider = ({ children }: { children: ReactNode }) => {
  const visitedRef = useRef<number[]>([]);

  const addToHistory = (productId: number) => {
    if (!visitedRef.current.includes(productId)) {
      visitedRef.current.unshift(productId);
      if (visitedRef.current.length > 10) {
        visitedRef.current.pop();
      }
    }
  };

  const getHistory = () => visitedRef.current;

  return (
    <NavigationHistoryContext.Provider value={{ addToHistory, getHistory }}>
      {children}
    </NavigationHistoryContext.Provider>
  );
};

export const useNavigationHistory = () => {
  const context = useContext(NavigationHistoryContext);
  if (!context) {
    throw new Error(
      'useNavigationHistory debe usarse dentro de NavigationHistoryProvider',
    );
  }
  return context;
};
