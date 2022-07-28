import { Link } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface UnderlineLinkProps {
  href: string;
  children: ReactNode
}

export function UnderlineLink({ href, children }: UnderlineLinkProps) {
  return (
    <>
      <Link
        href={href}
        target="_blank"
        color="brandRed.500"
        position="relative"
        _hover={{
          _after: {
            transform: 'scaleX(1)',
            transformOrigin: 'bottom left',
          },
        }}
        _after={{
          content: '""',
          position: 'absolute',
          width: '100%',
          transform: 'scaleX(0)',
          height: '1px',
          bottom: 0,
          left: 0,
          background: 'brandRed.500',
          transformOrigin: 'bottom right',
          transition: 'transform 0.25s ease-out',
        }}
      >
        {children}
      </Link>
      {' '}
    </>
  );
}
