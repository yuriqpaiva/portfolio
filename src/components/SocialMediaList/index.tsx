import { Box, Flex } from '@chakra-ui/react';
import { RiLinkedinBoxFill, RiGithubFill, RiMailFill } from 'react-icons/ri';
import { SocialMediaItem } from './SocialMediaItem';

const socialMedias = [
  { icon: RiGithubFill, href: 'https://github.com/yuriqpaiva' },
  {
    icon: RiLinkedinBoxFill,
    href: 'https://www.linkedin.com/in/yuri-queiroz-paiva-a4b7111b3/',
  },
  {
    icon: RiMailFill,
    href: 'mailto:yuriqpaiva@gmail.com',
    noTargetBlank: true,
  },
];

export function SocialMediaList() {
  return (
    <Flex position="fixed" top="0" bottom="0" my="auto" ml="4">
      <Flex my="auto" flexDir="column" gap="4">
        <Box bg="white" w={9} h="0.1" />
        {socialMedias.map((media) => (
          <SocialMediaItem data={media} />
        ))}
        <Box bg="white" w={9} h="0.1" />
      </Flex>
    </Flex>
  );
}
