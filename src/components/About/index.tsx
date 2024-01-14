import {
  Box,
  Flex,
  SimpleGrid,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Reveal } from 'react-awesome-reveal';
import { AboutDescription } from './AboutDescription';
import { AboutProfilePicture } from './AboutProfilePicture';
// import { AboutTechnologies } from './AboutTechnologies';
import { SectionTitle } from '../utils/SectionTitle';
import { revealAnimation } from '../../utils/animations/revealAnimation';
// import { useGetTechnologiesQuery } from '../../graphql/generated';

export function About() {
  // const { data } = useGetTechnologiesQuery();

  const isWideVersion = useBreakpointValue({ base: false, md: true });

  return (
    <Box
      w="100%"
      display="flex"
      as={Reveal}
      delay={200}
      keyframes={revealAnimation}
      triggerOnce
      mt="6vh"
      pb="8rem"
    >
      <Flex w="100%" flexDir="column" as="section" id="about-me" pt={30}>
        <SectionTitle name="About Me" number={1} justify="flex-start" />
        {!isWideVersion && <AboutProfilePicture />}
        <Flex>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing="10"
            mt={{ base: '16', md: '0' }}
          >
            <Stack spacing="6" fontSize="1.125rem" color="gray.300">
              <AboutDescription />
              {/* <AboutTechnologies technologies={data?.technologies} /> */}
            </Stack>
            {isWideVersion && <AboutProfilePicture />}
          </SimpleGrid>
        </Flex>
      </Flex>
    </Box>
  );
}
