import {
  Flex,
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
import { Navbar } from './Navbar/Navbar';

export function Header() {
  const [hiddenHeader, setHiddenHeader] = useState(false);
  const [isSettingHidden, setIsSettingHidden] = useState(false);
  const { onToggle, isOpen } = useSidebarData();

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
        <Box as="a" href="/">
          <Icon as={LogoIcon} />
        </Box>
        {isWideVersion && <Navbar />}
      </Flex>
      {!isWideVersion && (
        <Button
          variant="none"
          p={0}
          onClick={onToggle}
          pos="absolute"
          right={14}
          zIndex={1500}
          top={hiddenHeader && !isOpen ? -122 : 41}
          transition="transform 0.5s ease-in-out, top 0.3s"
          transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
        >
          <Icon as={isOpen ? RiCloseFill : RiMenu3Fill} boxSize="2.25rem" color="brandRed.500" />
        </Button>
      )}
    </>
  );
}
