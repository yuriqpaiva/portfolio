import { Flex, Icon, Text } from '@chakra-ui/react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { UnderlineLink } from '../utils/UnderlineLink';

interface CompanyDetailProps {
  experience: {
    place: string;
    office: string;
    duties: string[];
    startDate: string;
    endDate: string | null;
    url: string;
  } | null;
}

export function ExperienceDetail({ experience }: CompanyDetailProps) {
  if (experience) {
    return (
      <Flex w="80%" flexDir="column">
        <Text fontSize="1.25rem" fontWeight="semibold" color="gray.200">
          {experience.office}
          {' '}
          at
          {' '}
          <UnderlineLink href={experience.url}>
            {experience.place}
          </UnderlineLink>
        </Text>
        <Text color="gray.400">
          {experience.startDate}
          {' '}
          -
          {' '}
          {experience.endDate ?? 'Present'}
        </Text>
        {experience.duties.map((duty) => (
          <Flex mt="8" alignItems="center" key={duty}>
            <Icon as={RiArrowRightSLine} boxSize={6} color="brandRed.500" />
            <Text ml="2">{duty}</Text>
          </Flex>
        ))}
      </Flex>
    );
  }
  return null;
}
