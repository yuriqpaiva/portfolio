import { Box, HStack, Text } from '@chakra-ui/react';
import { TechnologyItem } from './TechnologyItem';

interface AboutTechnologiesProps {
  technologies: {
    name: string;
    description: string;
    image_url: string;
  }[] | undefined;
}

export function AboutTechnologies({ technologies }: AboutTechnologiesProps) {
  return (
    <Box>
      <Text>
        Technologies that I&apos;ve been recently working with:
      </Text>
      <Text
        as="span"
        color="brandRed.500"
        mb="8"
        display="block"
        fontWeight="semibold"
      >
        (*hover over icons for more information)
      </Text>
      {technologies && (
      <HStack spacing="12">
        {technologies.map((technology) => (
          <TechnologyItem
            technology={technology}
            key={technology.name}
          />
        ))}
      </HStack>
      )}
    </Box>
  );
}
