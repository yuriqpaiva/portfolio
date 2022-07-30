import { Flex, Stack } from '@chakra-ui/react';
import { gql, useQuery } from '@apollo/client';
import { SectionTitle } from '../utils/SectionTitle';
import { HighlightProject } from './HighlightProject';

const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      title
      technologies
      description
      deploy_url
      github_url
      image
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
  }[];
}

export function Projects() {
  const { data } = useQuery<GetProjectsResponse>(GET_PROJECTS);

  return (
    <Flex w="100%" flexDir="column" as="section" id="experience" mb="40">
      <SectionTitle name="Projects that I've built" number={3} />
      <Stack spacing="12">
        {data?.projects.map((project) => (
          <HighlightProject project={project} key={project.title} />
        ))}
      </Stack>
    </Flex>
  );
}
