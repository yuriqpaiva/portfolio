import {
  Box, Flex, HStack, Icon, Stack, Text,
} from '@chakra-ui/react';
import { Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import { JavaScriptIcon } from '../../icons/technologies/JavaScriptIcon';
import { ReactIcon } from '../../icons/technologies/ReactIcon';
import { NodeIcon } from '../../icons/technologies/NodeIcon';
import { MongoIcon } from '../../icons/technologies/MongoIcon';

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
      <Flex w="100%" flexDir="column">
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
            <Stack spacing="6" fontSize="1.125rem">
              <Text opacity="0.8">
                Hey! My name is Yuri and welcome to my portfolio. I&apos;m a
                Full Stack Developer. I started programming since 2018 when I
                had my first experience with Software Development in college,
                since then, I started to get more and more interest in Web
                Development, mastering and focusing in JavaScript Stack using
                React, React Native and Back-End Node Frameworks like Express
                and NestJS.
              </Text>
              <Text opacity="0.8">
                I&apos;m current working at a ticket sales start-up in Brazil
                where the main focus is on build apps with performance,
                accessibility and great SEO, using Agile methodology.
              </Text>
              <Text opacity="0.8">
                Technologies that I&apos;ve been recently working with:
              </Text>
              <HStack spacing="6">
                <Icon as={JavaScriptIcon} color="brandRed.500" boxSize="12" />
                <Icon as={ReactIcon} color="brandRed.500" boxSize="12" />
                <Icon as={NodeIcon} color="brandRed.500" boxSize="12" />
                <Icon as={MongoIcon} color="brandRed.500" boxSize="12" />
              </HStack>
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
