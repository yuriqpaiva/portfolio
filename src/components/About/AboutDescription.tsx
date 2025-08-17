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
        <strong>Full Stack Engineer</strong>
        {' '}
        with
        {' '}
        <strong>5</strong>
        {' '}
        years of experience in
        {' '}
        <UnderlineLink href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript">
          JavaScript
        </UnderlineLink>
        {' '}
        and
        {' '}
        <UnderlineLink href="https://nodejs.org/en">Node.js</UnderlineLink>
        , specializing in designing and scaling applications from concept to deployment. Proven track record in leading teams, streamlining development cycles, and implementing best practices that accelerate delivery and elevate product quality.
        {' '}
        <br />
        <br />
        <strong>Key achievements include:</strong>
        <br />
        <br />
        <ul>
          <li>
            Led end-to-end architecture design for web and mobile platforms using React Native, NestJS, GraphQL, and microservices—establishing scalable foundations, improving system transparency by 30%, and cutting infrastructure costs by 10%.
          </li>
          <li>
            Defined and implemented engineering processes that reduced technical debt and deployment errors while enabling consistent sprint deliveries, accelerating time-to-market for critical features and strengthening cross-functional collaboration.
          </li>
        </ul>
      </Text>
    </Box>
  );
}
