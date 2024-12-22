import { Box, Text } from '@chakra-ui/react';
import { UnderlineLink } from '../utils/UnderlineLink';

export function AboutDescription() {
  return (
    <Box fontSize={{ base: '0.875rem', sm: '1rem', md: '1.125rem' }}>
      <Text
        css={{
          listStylePosition: 'inside',
        }}
      >
        Innovative
        {' '}
        <strong>Full Stack Software Developer</strong>
        {' '}
        with
        {' '}
        <strong>5+</strong>
        {' '}
        years of experience in
        {' '}
        <UnderlineLink href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript">
          JavaScript
        </UnderlineLink>
        ,
        {' '}
        <UnderlineLink href="https://nodejs.org/en">Node.js</UnderlineLink>
        ,
        and modern web technologies. I specialize in building high-performance
        web and mobile applications, optimizing development processes, and
        delivering exceptional user experiences.
        {' '}
        <br />
        <br />
        <strong>Key achievements include:</strong>
        <br />
        <br />
        <ul>
          <li>
            Cutting project timelines by 25% through efficient end-to-end
            development.
          </li>
          <li>
            Driving a 200% increase in user acquisition with impactful
            application designs.
          </li>
          <li>
            Reducing post-release issues by 30% through robust testing
            strategies.
          </li>
        </ul>
      </Text>
    </Box>
  );
}
