import { Box, ListItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface NavItemProps {
  index: number;
  item: {
    name: string;
    href: string;
  };
}

export function NavItem({ index, item }: NavItemProps) {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(true);
    }, 100 * (index + 1));
  }, []);

  if (showComponent) {
    return (
      <ListItem
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
        as={motion.div}
        initial={{ opacity: 0, translateY: -100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition="transform 1s ease-in-out, color 0.2s ease-in-out"
      >
        <Box as="a" href={item.href}>
          {item.name}
        </Box>
      </ListItem>
    );
  }
  return null;
}
