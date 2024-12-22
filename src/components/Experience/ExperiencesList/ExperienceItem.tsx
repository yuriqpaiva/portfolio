import { Button, Text } from '@chakra-ui/react';

interface ExperienceItemProps {
  active?: boolean;
  experience: {
    id: string;
    place?: string | null | undefined;
    office?: string | null | undefined;
    duties: string[];
    startDate?: any;
    endDate?: any;
    url?: string | null | undefined;
  };
  // eslint-disable-next-line no-unused-vars
  handleExperienceChange: (value: string) => void;
}

export function ExperienceItem({
  active = false,
  experience,
  handleExperienceChange,
}: ExperienceItemProps) {
  return (
    <Button
      variant="unstyled"
      textAlign="start"
      filter="auto"
      transition="all 0.2s ease-in-out"
      pl={{ md: 2 }}
      position="relative"
      borderRadius={0}
      role="group"
      w="100%"
      minW="auto"
      onClick={() => handleExperienceChange(experience.id)}
    >
      <Text
        color={active ? 'brandRed.500' : 'gray.400'}
        fontFamily="Roboto Mono"
        fontWeight="medium"
        fontSize="1rem"
        _groupHover={{ color: 'brandRed.500' }}
        transition="color 0.2s ease-in-out"
      >
        {experience.place}
      </Text>
    </Button>
  );
}
