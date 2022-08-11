import {
  Flex, HStack, Icon, Link, Text,
} from '@chakra-ui/react';
import { socialMedias } from '../../constants/socialMedias';

export function Footer() {
  return (
    <Flex my="12" flexDir="column" align="center">
      <HStack mb="4" spacing="6">
        {socialMedias.map((item) => (
          <Link isExternal={!item.noTargetBlank} href={item.href}>
            <Icon
              as={item.icon}
              boxSize="1.5rem"
              color="gray.400"
              transition="color 0.2s ease-in-out"
              _hover={{ color: 'brandRed.500' }}
            />
          </Link>
        ))}
      </HStack>
      <Text fontSize="1rem" color="gray.200">
        © Created by Yuri Paiva - 2022
      </Text>
    </Flex>
  );
}
