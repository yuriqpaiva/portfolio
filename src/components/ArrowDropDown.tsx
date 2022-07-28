import { Container, chakra, Icon } from '@chakra-ui/react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { motion, isValidMotionProp } from 'framer-motion';
import { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and the children prop to be forwarded.
   * All other chakra props not matching the motion props will still be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

export function ArrowDropDown() {
  const [hiddenIcon, setHiddenIcon] = useState(false);

  useScrollPosition(({ currPos }) => {
    if (currPos.y <= -38) {
      setHiddenIcon(true);
    } else {
      setHiddenIcon(false);
    }
  });

  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      mt={-40}
      transition="opacity 0.3s ease-in-out"
      opacity={hiddenIcon ? 0 : 1}
    >
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
