import {
  Box, Flex, HStack, Stack, Text,
} from '@chakra-ui/react';
import { Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import { gql, useQuery } from '@apollo/client';
import { TechnologyItem } from './TechnologyItem';
import { UnderlineLink } from '../utils/UnderlineLink';

const GET_TECHNOLOGIES = gql`
  query GetTechnologies {
    technologies {
      image_url
      name
      description
    }
  }
`;

interface GetTechnologiesResponse {
  technologies: {
    name: string;
    description: string;
    image_url: string;
  }[];
}

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(100px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export function About() {
  const { data } = useQuery<GetTechnologiesResponse>(GET_TECHNOLOGIES);

  return (
    <Box
      mt={80}
      w="100%"
      display="flex"
      as={Reveal}
      delay={300}
      keyframes={customAnimation}
      triggerOnce
    >
      <Flex
        w="100%"
        flexDir="column"
        id="about-me"

      >
        <Flex alignItems="center">
          <Text
            as="span"
            fontFamily="Roboto Mono"
            color="brandRed.500"
            fontWeight="medium"
            fontSize="1.5rem"
          >
            01.
            {' '}
          </Text>
          <Text as="h3" fontSize="2rem" fontWeight="semibold" ml="2">
            About Me
          </Text>
          <Box
            display="inline-block"
            borderBottomWidth="thin"
            opacity={0.5}
            h={0}
            ml="6"
            w="40%"
          />
        </Flex>
        <Flex>
          <Flex marginY="10" width="50%">
            <Stack spacing="6" fontSize="1.125rem" color="gray.300">
              <Text>
                Hey! My name is Yuri and welcome to my portfolio. I&apos;m a
                {' '}
                <UnderlineLink href="https://www.w3schools.com/whatis/whatis_fullstack.asp#:~:text=A%20full%20stack%20web%20developer,ASP%2C%20Python%2C%20or%20Node)">
                  Full Stack
                </UnderlineLink>
                Developer. I started programming since 2018 when I had my first
                experience with Software Development in college, since then, I
                started to get more and more interest in Web Development,
                mastering and focusing in JavaScript Stack using
                {' '}
                <UnderlineLink href="https://reactjs.org/">
                  React
                </UnderlineLink>
                ,
                <UnderlineLink href="https://reactnative.dev/">
                  React Native
                </UnderlineLink>
                and Back-End
                {' '}
                <UnderlineLink href="https://nodejs.org/en/">
                  NodeJS
                </UnderlineLink>
                Frameworks like Express and NestJS.
              </Text>
              <Text>
                I&apos;m current working at a ticket sales start-up in Brazil
                where the main focus is on build apps with performance,
                accessibility and great SEO, using Agile methodology.
              </Text>
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
                {data?.technologies && (
                  <HStack spacing="12">
                    {data?.technologies.map((technology) => (
                      <TechnologyItem
                        technology={technology}
                        key={technology.name}
                      />
                    ))}
                  </HStack>
                )}
              </Box>
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
