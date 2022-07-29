import { Box, Image } from '@chakra-ui/react';

export function AboutProfilePicture() {
  return (
    <Box
      boxSize="300px"
      borderRadius={12}
      position="relative"
      _hover={{
        _after: {
          opacity: 0,
        },
      }}
      role="group"
      _after={{
        content: '""',
        opacity: 0.1,
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
        borderRadius={12}
        src="https://github.com/yuriqpaiva.png"
        alt="Github profile picture"
      />
      <Box
        position="absolute"
        height={300}
        width={300}
        bg="transparent"
        borderRadius={12}
        borderWidth={2}
        borderColor="brandRed.500"
        top={8}
        left={8}
        transition="transform 0.2s ease-in-out"
        zIndex={-1}
        _groupHover={{
          transform: 'translate(-10px, -10px)',
        }}
      />
    </Box>
  );
}
