import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react';
import { useSidebarData } from '../../../hooks/useSidebarData';
import { Navbar } from '../Navbar/Navbar';

export function Sidebar() {
  const { onClose, isOpen } = useSidebarData();

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg="brandBlue.800" p="8" zIndex={0}>
          <DrawerBody>
            <Navbar flexDir="column" mt="20" isSidebar />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
