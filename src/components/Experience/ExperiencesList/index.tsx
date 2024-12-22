import { Flex, Stack } from '@chakra-ui/react';
import { ExperienceItem } from './ExperienceItem';

interface ExperienceListProps {
  experiences: {
    id: string;
    place?: string | null | undefined;
    office?: string | null | undefined;
    duties: string[];
    startDate?: any;
    endDate?: any;
    url?: string | null | undefined;
  }[];
  selectedExperienceId?: string;
  // eslint-disable-next-line no-unused-vars
  onExperienceChange: (value: string) => void;
}

export function ExperienceList({
  experiences,
  selectedExperienceId,
  onExperienceChange,
}: ExperienceListProps) {
  return (
    <Flex
      w={{ base: '100%', md: '20%' }}
      mb={{ base: '6', md: '0' }}
      mr={{ base: '0', md: '8' }}
    >
      <Stack spacing="5" direction={{ base: 'row', md: 'column' }}>
        {experiences.map((experience) => (
          <ExperienceItem
            handleExperienceChange={onExperienceChange}
            active={experience.id === selectedExperienceId}
            experience={experience}
            key={experience.place}
          />
        ))}
      </Stack>
    </Flex>
  );
}
