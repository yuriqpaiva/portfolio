import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Reveal from 'react-awesome-reveal';
import { RiContactsBook2Line } from 'react-icons/ri';
import { revealAnimation } from '../../utils/animations/revealAnimation';
import { SectionTitle } from '../utils/SectionTitle';

export function Contact() {
  const isWideVersion = useBreakpointValue({ base: false, md: true });

  return (
    <Box
      display="flex"
      as={Reveal}
      delay={200}
      keyframes={revealAnimation}
      triggerOnce
      w={{ base: '100%', md: '70%' }}
    >
      <Flex flexDir="column" as="section" id="contact" mt="15rem" mb="20">
        <SectionTitle name="Contact" number={4} />
        <Flex gap="10" flexDir={{ base: 'column', md: 'row' }}>
          <Flex flexDir="column" w={{ base: '100%', md: '60%' }}>
            <Box fontSize="1.125rem" color="gray.300">
              <Text>
                I&apos;m open to make new professional connections to share or
                receive new sources of knowledge. Also looking for new
                opportunities to add value through technology.
              </Text>
              <Text mt="8">
                Please, feel free to contact me and I will try my best to help
                you!
              </Text>
            </Box>
            <Button
              w="40"
              colorScheme="none"
              variant="none"
              borderColor="brandRed.500"
              borderWidth="1px"
              bg="transparent"
              mt="10"
              _hover={{
                bg: 'brandRedOpacity.500',
              }}
              onClick={() => {
                window.location = 'mailto:yuriqpaiva@gmail.com' as (
                  | string
                  | Location
                ) &
                  Location;
              }}
            >
              Let&apos;s talk!
            </Button>
          </Flex>
          {isWideVersion && (
            <Icon as={RiContactsBook2Line} boxSize={90} color="brandRed.500" />
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
