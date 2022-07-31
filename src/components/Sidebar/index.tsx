import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Text,
} from '@chakra-ui/react';
import { useSidebarData } from '../../hooks/useSidebarData';

export function Sidebar() {
  const { onToggle, isOpen } = useSidebarData();

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onToggle}>
      <DrawerOverlay>
        <DrawerContent bg="brandBlue.900" p="8" zIndex={0}>
          <DrawerHeader>Navegação</DrawerHeader>
          <DrawerBody>
            <Text>Navigation</Text>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
