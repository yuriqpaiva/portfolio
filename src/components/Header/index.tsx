import {
  Flex, OrderedList, Icon, Box,
} from '@chakra-ui/react';
import { LogoIcon } from '../../icons/Logo';
import { NavItem } from './NavItem';

const navItems = ['About', 'Experience', 'Projects', 'Contact'];

export function Header() {
  return (
    <Flex as="nav" justify="space-between" py="10" px="14">
      <Box as="a" href="/">
        <Icon as={LogoIcon} />
      </Box>
      <OrderedList display="flex" gap="10">
        {navItems.map((item, index) => (
          <NavItem item={item} index={index} />
        ))}
      </OrderedList>
    </Flex>
  );
}
