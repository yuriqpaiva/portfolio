import {
  Flex, OrderedList, ListItem, Icon,
} from '@chakra-ui/react';
import { LogoIcon } from '../icons/Logo';

const navItems = ['About', 'Experience', 'Projects', 'Contact'];

export function Header() {
  return (
    <Flex as="nav" justify="space-between" p="10">
      <Icon as={LogoIcon} />
      <OrderedList display="flex" gap="10">
        {navItems.map((item, index) => (
          <ListItem
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
            {item}
          </ListItem>
        ))}
      </OrderedList>
    </Flex>
  );
}
