import { Button, Text } from '@chakra-ui/react';

interface ExperienceItemProps {
  active?: boolean;
  experience: { id: string; place: string };
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
      pl={2}
      position="relative"
      borderRadius={0}
      role="group"
      w="100%"
      onClick={() => handleExperienceChange(experience.id)}
    >
      <Text
        color={active ? 'brandRed.500' : 'white'}
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
