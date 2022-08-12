import {
  Box,
  Flex,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import Reveal from 'react-awesome-reveal';
import { SectionTitle } from '../utils/SectionTitle';
import { HighlightProject } from './HighlightProject';
import { RelevantProject } from './RelevantProject';
import { revealAnimation } from '../../utils/animations/revealAnimation';
import { useGetProjectsQuery } from '../../graphql/generated';

export function Projects() {
  const { data } = useGetProjectsQuery();

  return (
    <Box
      w="100%"
      display="flex"
      as={Reveal}
      delay={200}
      keyframes={revealAnimation}
      triggerOnce
    >
      <Flex w="100%" flexDir="column" as="section" id="projects" mt="1rem" pt="2rem">
        <SectionTitle name="Projects that I've built" number={3} />
        <Stack spacing="12">
          {data?.projects.map((project) => {
            if (project.category === 'highlight') {
              return <HighlightProject project={project} key={project.title} />;
            }
            return null;
          })}
        </Stack>
        <Text
          textAlign="center"
          fontWeight="semibold"
          fontSize="1.75rem"
          color="gray.300"
          my="20"
          fontFamily="Roboto Mono"
        >
          Other relevant projects...
        </Text>
        <SimpleGrid minChildWidth={{ base: 200, sm: 344 }} spacing="10">
          {data?.projects.map((project) => {
            if (project.category === 'relevant') {
              return <RelevantProject project={project} key={project.title} />;
            }
            return null;
          })}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
