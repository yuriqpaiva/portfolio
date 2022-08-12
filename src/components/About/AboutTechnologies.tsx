import {
  Box, SimpleGrid, Text,
} from '@chakra-ui/react';
import { TechnologyItem } from './TechnologyItem';

interface AboutTechnologiesProps {
  technologies: {
    image_url?: string | null | undefined;
    name?: string | null | undefined;
    description?: string | null | undefined;
}[] | undefined
}

export function AboutTechnologies({ technologies }: AboutTechnologiesProps) {
  return (
    <Box fontSize={{ base: '0.875rem', sm: '1rem', md: '1.125rem' }}>
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
      <SimpleGrid
        minChildWidth={20}
        spacing={6}
      >
        {technologies.map((technology) => (
          <TechnologyItem
            technology={technology}
            key={technology.name}
          />
        ))}
      </SimpleGrid>
      )}
    </Box>
  );
}
