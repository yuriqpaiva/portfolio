import { Image, Link } from '@chakra-ui/react';

interface ProjectImageProps {
  href: string;
}

export function ProjectImage({ href }: ProjectImageProps) {
  return (
    <Link
      href={href}
      w="40%"
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
        objectFit="cover"
        h="100%"
        src="https://adriandelgado.dev/static/media/coinflip.fdff9603.webp"
        borderRadius={8}
      />
    </Link>
  );
}
