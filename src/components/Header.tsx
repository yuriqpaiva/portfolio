import {
  Flex, OrderedList, ListItem, Icon, Box,
} from '@chakra-ui/react';
import { LogoIcon } from '../icons/Logo';

const navItems = ['About', 'Experience', 'Projects', 'Contact'];

export function Header() {
  return (
    <Flex as="nav" justify="space-between" py="10" px="14">
      <Box as="a" href="/">
        <Icon as={LogoIcon} />
      </Box>
      <OrderedList display="flex" gap="10">
        {navItems.map((item, index) => (
          <ListItem
            key={item}
            transition="color 0.2s ease-in-out"
            _hover={{ color: 'brandRed.500' }}
            fontFamily="Roboto Mono"
            listStyleType="none"
            fontSize="14"
            _before={{
              content: `"0${index + 1}."`,
              marginRight: '1',
              color: 'brandRed.500',
            }}
            position="relative"
          >
            <Box as="a" href="/">
              {item}
            </Box>
          </ListItem>
        ))}
      </OrderedList>
    </Flex>
  );
}
