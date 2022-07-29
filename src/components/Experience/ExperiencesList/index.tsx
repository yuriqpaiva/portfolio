import { Flex, Stack } from '@chakra-ui/react';
import { ExperienceItem } from './ExperienceItem';

interface ExperienceListProps {
  experiences: { id: string; place: string }[];
  selectedExperienceId?: string;
  onExperienceChange: (value: string) => void;
}

export function ExperienceList({
  experiences,
  selectedExperienceId,
  onExperienceChange,
}: ExperienceListProps) {
  return (
    <Flex w="20%">
      <Stack spacing="4">
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
