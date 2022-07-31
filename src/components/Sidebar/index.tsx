import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react';
import { useSidebarData } from '../../hooks/useSidebarData';
import { Navbar } from '../Header/Navbar/Navbar';

export function Sidebar() {
  const { onClose, isOpen } = useSidebarData();

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} returnFocusOnClose>
      <DrawerOverlay>
        <DrawerContent bg="brandBlue.800" p="8" zIndex={0}>
          <DrawerBody>
            <Navbar flexDir="column" mt="20" />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
