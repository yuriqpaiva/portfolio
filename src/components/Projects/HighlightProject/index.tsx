import {
  Box,
  Flex,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { RiExternalLinkLine, RiGithubLine } from 'react-icons/ri';
import { IconLink } from '../../utils/IconLink';
import { ProjectImage } from './ProjectImage';

interface HighlightProjectProps {
  project: {
    title: string;
    technologies: string[];
    description: string;
    deploy_url: string | null;
    github_url: string | null;
    image: string;
  };
}

export function HighlightProject({ project }: HighlightProjectProps) {
  return (
    <Flex bg="brandBlue.800" py="8" px="12" borderRadius={8} gap="10">
      <ProjectImage
        href={project.deploy_url ?? project.github_url}
        src={project.image}
      />
      <Flex flex={1} flexDir="column" gap="8">
        <Box>
          <Link
            href={project.deploy_url! ?? project.github_url}
            _activeLink={{ textDecor: 'none' }}
            _visited={{ textDecor: 'none' }}
            _hover={{ textDecor: 'none' }}
            _active={{ textDecor: 'none' }}
          >
            <Text
              color="gray.200"
              fontWeight="bold"
              fontSize="1.75rem"
              display="inline"
              transition="color 0.2s ease-in-out"
              _hover={{ color: 'brandRed.500' }}
              h="20%"
            >
              {project.title}
            </Text>
          </Link>
        </Box>

        <Text color="gray.300" fontSize="1rem" h="40%">
          {project.description}
        </Text>
        <UnorderedList
          listStyleType="none"
          display="flex"
          ml={0}
          fontFamily="Roboto Mono"
          color="gray.400"
          gap="10"
          h="10%"
        >
          {project.technologies.map((technology) => (
            <ListItem key={technology}>{technology}</ListItem>
          ))}
        </UnorderedList>
        <Flex gap="8" h="20%" alignItems="end">
          {project.github_url && (
            <IconLink href={project.github_url} icon={RiGithubLine} />
          )}
          {project.deploy_url && (
            <IconLink href={project.deploy_url} icon={RiExternalLinkLine} />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
