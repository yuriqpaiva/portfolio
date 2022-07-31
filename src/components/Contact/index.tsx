import {
  Box, Button, Flex, Icon, Link, Text,
} from '@chakra-ui/react';
import Reveal from 'react-awesome-reveal';
import { RiContactsBook2Line } from 'react-icons/ri';
import { revealAnimation } from '../../utils/animations/revealAnimation';
import { SectionTitle } from '../utils/SectionTitle';

export function Contact() {
  return (
    <Box
      display="flex"
      as={Reveal}
      delay={200}
      keyframes={revealAnimation}
      triggerOnce
      w="70%"
    >
      <Flex flexDir="column" as="section" id="contact" pt={56} mb="20">
        <SectionTitle name="Contact" number={4} />
        <Flex gap="10">
          <Flex flexDir="column" w="60%">
            <Box fontSize="1.125rem" color="gray.300">
              <Text>
                I&apos;m open to make new professional connections to share or receive new
                sources of knowledge. Also looking for new opportunities to add value
                through technology.
              </Text>
              <Text mt="8">
                Please, feel free to contact me and I will try my best to help you!
              </Text>
            </Box>
            <Button
              w="40"
              colorScheme="none"
              variant="none"
              borderColor="brandRed.500"
              borderWidth="1px"
              bg="brandRed.500"
              mt="8"
              _hover={{
                bg: 'transparent',
              }}
              onClick={() => {
                window.location = 'mailto:yuriqpaiva@gmail.com' as (string | Location) & Location;
              }}
            >
              Let&apos;s talk!
            </Button>
          </Flex>
          <Icon as={RiContactsBook2Line} boxSize={90} color="brandRed.500" />
        </Flex>
      </Flex>
    </Box>
  );
}
