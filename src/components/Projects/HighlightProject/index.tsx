import {
  Box,
  Flex,
  Link,
  ListItem,
  Text,
  UnorderedList,
  useBreakpointValue,
} from '@chakra-ui/react';
import { RiExternalLinkLine, RiGithubLine } from 'react-icons/ri';
import { IconLink } from '../../utils/IconLink';
import { ProjectImage } from './ProjectImage';

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

export function HighlightProject({ project }: HighlightProjectProps) {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex
      h={isWideVersion ? 360 : '100%'}
      alignItems="center"
      py="8"
      px="12"
      borderRadius={8}
      gap="10"
      overflow="hidden"
      pos="relative"
      borderWidth={2}
      borderColor={isWideVersion ? 'transparent' : 'brandRed.500'}
      bg={isWideVersion ? 'brandBlue.800' : 'transparent'}
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        bg: 'brandBlue.700',
        opacity: 0.05,
        backgroundImage: project.image!,
        backgroundSize: 'cover',
        zIndex: -1,
        backgroundPosition: 'center',
      }}
    >
      {isWideVersion && (
        <ProjectImage
          href={project.deploy_url ?? project.github_url}
          src={project.image}
        />
      )}
      <Flex flex={1} flexDir="column" gap="8" w="100%" justify="space-between" h="100%">
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

        <Text
          color="gray.300"
          fontSize="1rem"
          h={isWideVersion ? '40%' : '100%'}
        >
          {project.description}
        </Text>
        <UnorderedList
          listStyleType="none"
          display="flex"
          flexWrap="wrap"
          ml={0}
          fontFamily="Roboto Mono"
          color="gray.400"
          gap={isWideVersion ? '10' : '4'}
          h={isWideVersion ? '10%' : '100%'}
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
