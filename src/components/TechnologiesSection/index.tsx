import {
  Box, Flex, Image, Text,
} from '@chakra-ui/react';
import Reveal from 'react-awesome-reveal';
import { useKeenSlider } from 'keen-slider/react';
import { revealAnimation } from '../../utils/animations/revealAnimation';
import { SectionTitle } from '../utils/SectionTitle';
import { useGetTechnologiesQuery } from '../../graphql/generated';

const animation = { duration: 20000, easing: (t: number) => t };

export function TechnologiesSection() {
  const { data } = useGetTechnologiesQuery();

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 4,
      spacing: 24,
    },
    loop: true,
    renderMode: 'performance',
    drag: true,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 1,
          spacing: 10,
        },
        mode: 'free-snap',
        drag: true,
        loop: true,
      },
      '(min-width: 768px) and (max-width: 1024px)': {
        slides: {
          perView: 3,
          spacing: 10,
        },
        mode: 'free-snap',
        drag: true,
        loop: true,
      },
    },
  });

  if (!data) return null;

  return (
    <Box
      as={Reveal}
      keyframes={revealAnimation}
      delay={200}
      triggerOnce
      width="100%"
      pt="2rem"
    >
      <Box id="technologies" />
      <SectionTitle name="Technologies I've worked with" number={2} />

      <Box
        id="technologies"
        mt="-2rem"
        width="100%"
        _before={{
          content: '""',
          position: 'absolute',
          top: '0',
          bottom: '0',
          width: '50px',
          zIndex: '2',
          left: '0',
          bgGradient: 'linear(to-r, #1A1A2E, transparent)',
        }}
        _after={{
          content: '""',
          position: 'absolute',
          top: '0',
          bottom: '0',
          width: '50px',
          zIndex: '2',
          right: '0',
          bgGradient: 'linear(to-l, #1A1A2E, transparent)',
        }}
      >
        <div ref={sliderRef} className="keen-slider">
          {data?.technologies.map((technology) => (
            <Flex
              key={technology.name}
              direction="column"
              justifyContent="center"
              alignItems="center"
              className="keen-slider__slide number-slide1"
              bgColor="brandBlue.800"
              borderRadius={12}
              padding="2rem"
              gap="6"
            >
              <Image
                src={technology?.image_url ?? ''}
                alt={technology?.description ?? ''}
                width="100px"
                height="100px"
                // cover
                objectFit="contain"
              />
              <Text
                fontFamily="Roboto Mono"
              >
                {technology?.name}

              </Text>
            </Flex>
          ))}
        </div>
      </Box>
    </Box>
  );
}
