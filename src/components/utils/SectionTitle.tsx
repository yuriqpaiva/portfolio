import {
  Box, Flex, FlexProps, Text,
} from '@chakra-ui/react';

interface SectionTitleProps extends FlexProps {
  number: number;
  name: string;
}

export function SectionTitle({ name, number, ...rest }: SectionTitleProps) {
  return (
    <Flex
      flex={1}
      alignItems="center"
      mb="10"
      {...rest}
    >
      <Text
        as="span"
        fontFamily="Roboto Mono"
        color="brandRed.500"
        fontWeight="medium"
        fontSize="clamp(26px,5vw,24px)"
      >
        0
        {number}
        .
        {' '}
      </Text>
      <Text
        as="h3"
        fontSize="clamp(26px,5vw,32px)"
        fontWeight="semibold"
        ml="2"
      >
        {name}
      </Text>
      <Box
        display="inline-block"
        borderBottomWidth="thin"
        opacity={0.5}
        h={0}
        ml="6"
        w="40%"
      />
    </Flex>
  );
}
