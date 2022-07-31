import { Button, ListItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSidebarData } from '../../../hooks/useSidebarData';

interface NavItemProps {
  index: number;
  item: {
    name: string;
    href: string;
  };
}

export function NavItem({ index, item }: NavItemProps) {
  const [showComponent, setShowComponent] = useState(false);
  const { onToggle } = useSidebarData();

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(true);
    }, 100 * (index + 1));
  }, []);

  async function goToReference() {
    setTimeout(() => {
      window.location = `${item.href}` as (string | Location) & Location;
    }, 200);
  }

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
        <Button
          onClick={async () => {
            goToReference();
            onToggle();
          }}
          variant="none"
        >
          {item.name}
        </Button>
      </ListItem>
    );
  }
  return null;
}
