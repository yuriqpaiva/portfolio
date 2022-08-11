import { Box, Flex } from '@chakra-ui/react';
import { socialMedias } from '../../constants/socialMedias';
import { SocialMediaItem } from './SocialMediaItem';

export function SocialMediaList() {
  return (
    <Flex position="fixed" top="0" bottom="0" my="auto" ml="4">
      <Flex my="auto" flexDir="column" gap="4">
        <Box bg="white" w={9} borderBottomWidth="thin" opacity={0.5} />
        {socialMedias.map((media) => (
          <SocialMediaItem data={media} key={media.href} />
        ))}
        <Box bg="white" w={9} borderBottomWidth="thin" opacity={0.5} />
      </Flex>
    </Flex>
  );
}
