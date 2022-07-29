import {
  Box,
  Flex,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import { Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import { gql, useQuery } from '@apollo/client';
import { AboutDescription } from './AboutDescription';
import { AboutProfilePicture } from './AboutProfilePicture';
import { AboutTechnologies } from './AboutTechnologies';
import { SectionTitle } from '../utils/SectionTitle';

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
      <Flex w="100%" flexDir="column" id="about-me">
        <SectionTitle name="About Me" number={1} />
        <Flex>
          <SimpleGrid columns={2} spacing="10">
            <Stack spacing="6" fontSize="1.125rem" color="gray.300">
              <AboutDescription />
              <AboutTechnologies technologies={data?.technologies} />
            </Stack>
            <AboutProfilePicture />
          </SimpleGrid>
        </Flex>
      </Flex>
    </Box>
  );
}
