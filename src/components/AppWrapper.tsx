import { LanguageProvider } from '../context/LanguageContext';
import type { ReactNode } from 'react';

interface AppWrapperProps {
  children: ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}
