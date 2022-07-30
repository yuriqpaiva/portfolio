import {
  Box,
  Flex,
  Icon,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { RiExternalLinkLine, RiGithubLine } from 'react-icons/ri';
import { ProjectImage } from './ProjectImage';

export function HighlightProject() {
  return (
    <Flex bg="brandBlue.800" py="8" px="12" borderRadius={8} gap="10">
      <ProjectImage href="/" />
      <Flex flex={1} flexDir="column" gap="8">
        <Box>
          <Link
            href="/"
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
            >
              Upass
            </Text>
          </Link>
        </Box>

        <Text color="gray.300" fontSize="1rem">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          suscipit ad porro iure, fugiat id natus sapiente quibusdam numquam
          maiores nisi assumenda voluptate quo earum error, repellat dolor sint
          delectus!
        </Text>
        <UnorderedList
          listStyleType="none"
          display="flex"
          ml={0}
          fontFamily="Roboto Mono"
          color="gray.400"
          gap="10"
        >
          <ListItem>VSCode</ListItem>
          <ListItem>NodeJS</ListItem>
          <ListItem>ReactJS</ListItem>
        </UnorderedList>
        <Flex gap="8">
          <Link href="/">
            <Icon
              as={RiGithubLine}
              boxSize="1.75rem"
              color="gray.300"
              transition="color 0.2s ease-in-out"
              _hover={{ color: 'brandRed.500' }}
            />
          </Link>
          <Link href="/">
            <Icon
              as={RiExternalLinkLine}
              boxSize="1.75rem"
              color="gray.300"
              transition="color 0.2s ease-in-out"
              _hover={{ color: 'brandRed.500' }}
            />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
