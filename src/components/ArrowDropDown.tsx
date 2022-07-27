import { Container, chakra, Icon } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { RiArrowDownSLine } from 'react-icons/ri';

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and the children prop to be forwarded.
   * All other chakra props not matching the motion props will still be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

export function ArrowDropDown() {
  return (
    <Container display="flex" alignItems="center" justifyContent="center" mt={-40}>
      <ChakraBox
        animate={{
          y: [20, 40],
        }}
        // @ts-ignore
        transition={{
          duration: 0.5,
          yoyo: Infinity,
          ease: 'easeIn',
        }}
      >
        <Icon as={RiArrowDownSLine} boxSize={100} color="brandRed.500" />
      </ChakraBox>
    </Container>
  );
}
