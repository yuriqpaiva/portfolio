import {
  Flex, Image, Text, Tooltip,
} from '@chakra-ui/react';

interface TechnologyItemProps {
  technology: {
    name: string;
    description: string;
    image_url: string;
  };
}

export function TechnologyItem({ technology }: TechnologyItemProps) {
  return (
    <Tooltip
      label={`${technology.description}`}
      fontSize="1rem"
      p="4"
      bg="brandBlue.700"
    >
      <Flex
        _hover={{ transform: 'translateY(-5px)' }}
        transition="transform 0.2s ease-in-out"
        flexDir="column"
        alignItems="center"
      >
        <Image src={technology.image_url} alt="" w="14" h="14" />
        <Text fontFamily="Roboto Mono" fontWeight="medium" mt="2" opacity={0.8} fontSize="0.875rem">{technology.name}</Text>
      </Flex>
    </Tooltip>

  );
}
