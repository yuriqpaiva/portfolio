import { useDisclosure } from '@chakra-ui/react';
import { createContext, ReactNode } from 'react';

interface SideBarContextProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const SidebarContext = createContext({} as SideBarContextProps);

interface SideBarProviderProps {
  children: ReactNode;
}

export function SidebarProvider({ children }: SideBarProviderProps) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <SidebarContext.Provider value={{ isOpen, onToggle }}>
      {children}
    </SidebarContext.Provider>
  );
}
