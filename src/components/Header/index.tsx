import {
  Flex,
  OrderedList,
  Icon,
  Box,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useEffect, useState } from 'react';
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';
import { useSidebarData } from '../../hooks/useSidebarData';
import { LogoIcon } from '../../icons/Logo';
import { Sidebar } from '../Sidebar';
import { NavItem } from './NavItem';

const navItems = [
  { name: 'About Me', href: '/#about-me' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
];

export function Header() {
  const [hiddenHeader, setHiddenHeader] = useState(false);
  const [isSettingHidden, setIsSettingHidden] = useState(false);
  const { onToggle } = useSidebarData();

  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  useScrollPosition(({ currPos }) => {
    if (currPos.y <= -38) {
      setHiddenHeader(true);
    } else {
      setHiddenHeader(false);
    }
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSettingHidden(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, [isSettingHidden]);

  const [isRotated, setIsRotated] = useState(false);

  return (
    <>
      <Flex
        as="nav"
        justify="space-between"
        py="10"
        px="14"
        position="fixed"
        left={0}
        right={0}
        top={hiddenHeader ? -122 : 0}
        transition="all 0.3s"
        boxShadow={isSettingHidden ? '#E94560 0px 10px 20px -10px' : ''}
        alignItems="center"
        zIndex={100}
        pos="relative"
      >
        <Sidebar />
        <Box as="a" href="/">
          <Icon as={LogoIcon} />
        </Box>
        {isWideVersion && (
          <OrderedList display="flex" gap="10">
            {navItems.map((item, index) => (
              <NavItem item={item} index={index} key={item.name} />
            ))}
          </OrderedList>
        )}
      </Flex>
      {!isWideVersion && (
        <Button
          variant="none"
          p={0}
          onClick={() => {
            onToggle();
            setIsRotated((currentValue) => !currentValue);
          }}
          pos="absolute"
          top={41}
          right={14}
          zIndex={1500}
          transition="transform 0.5s ease-in-out"
          transform={isRotated ? 'rotate(180deg)' : 'rotate(0deg)'}
        >
          <Icon as={isRotated ? RiCloseFill : RiMenu3Fill} boxSize="2.25rem" color="brandRed.500" />
        </Button>
      )}
    </>
  );
}
