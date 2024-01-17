import { Box, Text } from '@chakra-ui/react';
import { UnderlineLink } from '../utils/UnderlineLink';

export function AboutDescription() {
  return (
    <Box fontSize={{ base: '0.875rem', sm: '1rem', md: '1.125rem' }}>
      <Text>
        Hey! My name is Yuri and welcome to my portfolio. I&apos;m a
        {' '}
        <UnderlineLink href="https://www.w3schools.com/whatis/whatis_fullstack.asp#:~:text=A%20full%20stack%20web%20developer,ASP%2C%20Python%2C%20or%20Node)">
          Full Stack
        </UnderlineLink>
        Developer. I started programming since 2018 when I had my first
        experience with Software Development in college, since then, I started
        to get more and more interest in Web Development, mastering and focusing
        in JavaScript Stack using
        {' '}
        <UnderlineLink href="https://reactjs.org/">React</UnderlineLink>
        ,
        <UnderlineLink href="https://reactnative.dev/">
          React Native
        </UnderlineLink>
        and Back-End
        {' '}
        <UnderlineLink href="https://nodejs.org/en/">NodeJS</UnderlineLink>
        Frameworks like Express and NestJS.
      </Text>
      <Text>
        At present, I&apos;m deeply immersed in the vibrant tech landscape of a
        Brazilian technology solution startup. Here, I&apos;ve shouldered the
        responsibility for numerous projects, steering them through the entire
        development lifecycle. This hands-on involvement, coupled with the
        principles of Agile methodology, has not only enriched my skill set but
        has also contributed significantly to our success.
      </Text>
    </Box>
  );
}
