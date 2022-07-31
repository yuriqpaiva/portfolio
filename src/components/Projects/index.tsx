import {
  Box,
  Flex,
  HStack,
  Icon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { gql, useQuery } from '@apollo/client';
import Reveal from 'react-awesome-reveal';
import { SectionTitle } from '../utils/SectionTitle';
import { HighlightProject } from './HighlightProject';
import { RelevantProject } from './RelevantProject';
import { revealAnimation } from '../../utils/animations/revealAnimation';

const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      title
      technologies
      description
      deploy_url
      github_url
      image
      category
    }
  }
`;

interface GetProjectsResponse {
  projects: {
    title: string;
    technologies: string[];
    description: string;
    deploy_url: string | null;
    github_url: string | null;
    image: string;
    category: 'highlight' | 'relevant';
  }[];
}

export function Projects() {
  const { data } = useQuery<GetProjectsResponse>(GET_PROJECTS);
  return (
    <Box
      w="100%"
      display="flex"
      as={Reveal}
      delay={300}
      keyframes={revealAnimation}
      triggerOnce
    >
      <Flex w="100%" flexDir="column" as="section" id="projects" pt={16}>
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
        <SimpleGrid columns={3} spacing="10">
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
