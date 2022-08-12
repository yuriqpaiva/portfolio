import {
  Flex,
  HStack,
  Icon,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { RiFolderLine, RiExternalLinkLine, RiGithubLine } from 'react-icons/ri';
import { IconLink } from '../../utils/IconLink';

interface HighlightProjectProps {
  project: {
    title?: string | null;
    technologies: Array<string>;
    description?: string | null;
    deploy_url?: string | null;
    github_url?: string | null;
    image?: string | null;
    category?: string | null;
  };
}

export function RelevantProject({ project }: HighlightProjectProps) {
  return (
    <Flex
      bg="brandBlue.800"
      h={400}
      _hover={{ transform: 'translateY(-4px)' }}
      transition="transform 0.2s ease-in-out"
      p="8"
      borderRadius={8}
      flexDir="column"
      gap="8"
      role="group"
    >
      <Flex justify="space-between" h={50}>
        <Icon as={RiFolderLine} color="brandRed.500" boxSize="2.5rem" />
        <HStack spacing="4">
          {project.github_url && (
          <IconLink href={project.github_url} icon={RiGithubLine} />
          )}
          {project.deploy_url && (
            <IconLink href={project.deploy_url} icon={RiExternalLinkLine} />
          )}
        </HStack>
      </Flex>
      <Flex flexDir="column" gap="2" h={188}>
        <Text
          fontSize="1.5rem"
          fontWeight="semibold"
          color="gray.200"
          transition="color 0.2s ease-in-out"
          _groupHover={{ color: 'brandRed.500' }}
        >
          {project.title}
        </Text>
        <Text color="gray.300">
          {project.description}
        </Text>
      </Flex>
      <UnorderedList
        listStyleType="none"
        display="flex"
        ml={0}
        fontFamily="Roboto Mono"
        fontSize="0.875rem"
        color="gray.400"
        gap="6"
        h="10%"
        w="100%"
        mt="6"
      >
        {project.technologies.map((technology) => (
          <ListItem key={technology}>{technology}</ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
}
