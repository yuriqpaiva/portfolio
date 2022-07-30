import {
  Flex,
} from '@chakra-ui/react';
import { SectionTitle } from '../utils/SectionTitle';
import { HighlightProject } from './HighlightProject';

export function Projects() {
  return (
    <Flex w="100%" flexDir="column" as="section" id="experience" mb="40">
      <SectionTitle name="Projects that I've built" number={3} />
      <HighlightProject />
    </Flex>
  );
}
