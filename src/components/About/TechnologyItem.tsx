import {
  Flex, Image, Text, Tooltip,
} from '@chakra-ui/react';

interface TechnologyItemProps {
  technology:
    | {
        image_url?: string | null | undefined;
        name?: string | null | undefined;
        description?: string | null | undefined;
      }
    | undefined;
}

export function TechnologyItem({ technology }: TechnologyItemProps) {
  return (
    <Tooltip
      label={`${technology?.description}`}
      fontSize={{ base: '0.875rem', md: '1rem' }}
      p="4"
      bg="brandBlue.700"
    >
      <Flex
        _hover={{ transform: 'translateY(-5px)' }}
        transition="transform 0.2s ease-in-out"
        flexDir="column"
        alignItems="center"
        w={{ base: '8', md: '12' }}
        h={{ base: '8', md: '12' }}
        mx={{ base: 'auto', md: '0' }}
        mb={6}
      >
        <Image src={technology?.image_url!} alt="" w="100%" h="100%" />
        <Text
          fontFamily="Roboto Mono"
          fontWeight="medium"
          mt="2"
          color="gray.400"
          fontSize={{ base: '0.75rem', md: '0.875rem' }}
        >
          {technology?.name}
        </Text>
      </Flex>
    </Tooltip>
  );
}
