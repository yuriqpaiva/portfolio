import {
  Flex, OrderedList, Icon, Box,
} from '@chakra-ui/react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useEffect, useState } from 'react';
import { LogoIcon } from '../../icons/Logo';
import { NavItem } from './NavItem';

const navItems = [
  { name: 'About Me', href: '/#about-me' },
  { name: 'Experience', href: '/' },
  { name: 'Projects', href: '/' },
  { name: 'Contact', href: '/s' },
];

export function Header() {
  const [hiddenHeader, setHiddenHeader] = useState(false);
  const [isSettingHidden, setIsSettingHidden] = useState(false);

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
    <Flex
      as="nav"
      justify="space-between"
      py="10"
      px="14"
      position="fixed"
      left={0}
      right={0}
      top={hiddenHeader ? -122 : 0}
      transition="all 0.5s"
      boxShadow={isSettingHidden ? '#E94560 0px 10px 20px -10px' : ''}
      alignItems="center"
    >
      <Box as="a" href="/">
        <Icon as={LogoIcon} />
      </Box>
      <OrderedList display="flex" gap="10">
        {navItems.map((item, index) => (
          <NavItem item={item} index={index} key={item.name} />
        ))}
      </OrderedList>
    </Flex>
  );
}
