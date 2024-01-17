import { Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowDropDown } from '../ArrowDropDown';

export function MainPresentation() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(true);
    }, 300);
  }, []);

  return (
    <Flex
      w="100%"
      visibility={showComponent ? 'visible' : 'hidden'}
      maxWidth={1160}
      h="85vh"
      justify="center"
      flexDir="column"
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
      <Text fontSize="clamp(40px, 8vw, 80px)" fontWeight="bold" as="h1">
        Yuri Paiva.
      </Text>
      <Text
        fontSize="clamp(40px, 8vw, 80px)"
        fontWeight="bold"
        opacity="0.8"
        as="h2"
      >
        {'<Full-Stack Developer />'}
      </Text>
      <Text
        fontSize={{ base: '1rem', md: '1.25rem' }}
        as="h1"
        w={{ base: 'auto', md: 540 }}
        mt="8"
        color="gray.300"
      >
        <Text as="strong" fontWeight="semibold" color="brandRed.500">
          Full Stack Software Engineer
        </Text>
        {' '}
        {' '}
        with over 4 years of experience in JavaScript and Node.js. I help
        companies streamline their development processes and achieve remarkable
        results.
      </Text>
      <ArrowDropDown />
    </Flex>
  );
}
