import {
  Box, Button, Flex, SimpleGrid, Stack, Text,
} from '@chakra-ui/react';
import Reveal from 'react-awesome-reveal';
import { useMemo, useState } from 'react';
import { SectionTitle } from '../utils/SectionTitle';
import { HighlightProject } from './HighlightProject';
import { RelevantProject } from './RelevantProject';
import { revealAnimation } from '../../utils/animations/revealAnimation';
import { useGetProjectsQuery } from '../../graphql/generated';

export function Projects() {
  const { data } = useGetProjectsQuery();

  const relevantProjects = useMemo(
    () => data?.projects.filter((project) => project.category === 'relevant'),
    [data],
  );

  const [showAllRelevantProjects, setShowAllRelevantProjects] = useState(false);

  function handleToggleShowRelevantProjects() {
    setShowAllRelevantProjects((currentValue) => !currentValue);
  }

  return (
    <Box
      w="100%"
      display="flex"
      as={Reveal}
      delay={200}
      keyframes={revealAnimation}
      triggerOnce
    >
      <Flex
        w="100%"
        flexDir="column"
        as="section"
        id="projects"
        mt="1rem"
        pt="2rem"
      >
        <SectionTitle name="Projects that I've built" number={4} />
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
          {relevantProjects
            ?.filter((_, index) => (showAllRelevantProjects ? true : index <= 5))
            .map((project, index) => (
              <RelevantProject project={project} key={project.title} index={index} />
            ))}
        </SimpleGrid>
        {relevantProjects && relevantProjects?.length > 6 && (
          <Button
            fontSize="1.25rem"
            p="28px"
            mx="auto"
            colorScheme="none"
            variant="none"
            borderColor="brandRed.500"
            borderWidth="1px"
            bg="transparent"
            mt="10"
            _hover={{
              bg: 'brandRedOpacity.500',
            }}
            onClick={() => handleToggleShowRelevantProjects()}
          >
            {showAllRelevantProjects ? 'Show less ...' : 'Show more ...'}
          </Button>
        )}
      </Flex>
    </Box>
  );
}
