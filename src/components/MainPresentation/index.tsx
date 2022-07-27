import { Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function MainPresentation() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(true);
    }, 100);
  }, []);

  if (showComponent) {
    return (
      <Flex
        maxWidth={1160}
        mx="auto"
        h="100vh"
        justify="center"
        flexDir="column"
        px="10"
        as={motion.div}
        initial={{ opacity: 0, translateX: 100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition="0.5s ease-in"
      >
        <Text
          fontSize="1rem"
          fontFamily="Roboto Mono"
          fontWeight="medium"
          color="brandRed.500"
          as="span"
        >
          Hi, my name is
        </Text>
        <Text fontSize="5rem" fontWeight="bold" as="h1">
          Yuri Paiva.
        </Text>
        <Text fontSize="5rem" fontWeight="bold" opacity="0.8" as="span">
          {'<Front-End Developer />'}
        </Text>
        <Text fontSize="1.25rem" as="h1" opacity="0.8" w={540} mt="8">
          I&apos;m Passionate about
          {' '}
          <Text as="span" fontWeight="semibold" color="brandRed.500">
            Software Development
            {' '}
          </Text>
          and always concerned with personal development through projects and
          new knowledge sources. I seek to solve problems through technology.
        </Text>
      </Flex>
    );
  }
  return null;
}
