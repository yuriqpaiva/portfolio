import { ListProps, OrderedList } from '@chakra-ui/react';
import { NavItem } from './NavItem';

const navItems = [
  { name: 'About Me', href: '/#about-me' },
  { name: 'Technologies', href: '/#technologies' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
];

interface NavbarProps extends ListProps {
  isSidebar?: boolean;
}

export function Navbar({ isSidebar, ...rest }: NavbarProps) {
  return (
    <OrderedList display="flex" gap="10" flex="1" maxW="1000px" {...rest}>
      {navItems.map((item, index) => (
        <NavItem item={item} index={index} key={item.name} isSidebar={isSidebar} />
      ))}
    </OrderedList>
  );
}
