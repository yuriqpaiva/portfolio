import { Icon, Link } from '@chakra-ui/react';
import { ElementType } from 'react';

interface IconLinProps {
  href: string;
  icon: ElementType;
}

export function IconLink({ href, icon }: IconLinProps) {
  return (
    <Link
      href={href}
      isExternal
      color="gray.300"
      transition="color 0.2s ease-in-out"
      _hover={{ color: 'brandRed.500' }}
    >
      <Icon
        as={icon}
        boxSize="1.75rem"
      />
    </Link>
  );
}
