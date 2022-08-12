import { Image, Link } from '@chakra-ui/react';

interface ProjectImageProps {
  href: string | null | undefined;
  src: string | null | undefined;
}

export function ProjectImage({ href, src }: ProjectImageProps) {
  return (
    <Link
      isExternal
      href={href || '/'}
      w="40%"
      h="100%"
      position="relative"
      _hover={{
        _after: {
          opacity: 0,
        },
      }}
      _after={{
        content: '""',
        opacity: 0.05,
        transition: 'opacity 0.2s ease-in-out',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        height: '100%',
        width: '100%',
        bg: 'brandRed.500',
      }}
    >
      <Image
        h="100%"
        objectFit="cover"
        src={src || ''}
        borderRadius={8}
      />
    </Link>
  );
}
