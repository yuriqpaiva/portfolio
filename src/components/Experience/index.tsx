import { Box, Flex } from '@chakra-ui/react';
import { gql, useQuery } from '@apollo/client';
import { useCallback, useEffect, useState } from 'react';
import Reveal from 'react-awesome-reveal';
import { SectionTitle } from '../utils/SectionTitle';
import { ExperienceDetail } from './ExperienceDetail';
import { ExperienceList } from './ExperiencesList';
import { formatDate } from '../../utils/functions/formatDate';
import { revealAnimation } from '../../utils/animations/revealAnimation';

const GET_EXPERIENCES = gql`
  query GetExperiences {
    experiences(orderBy: startDate_DESC) {
      id
      place
      office
      duties
      startDate
      endDate
      url
    }
  }
`;

interface ExperienceData {
  id: string;
  place: string;
  office: string;
  duties: string[];
  startDate: string;
  endDate: string | null;
  url: string;
}

interface GetExperiencesResponse {
  experiences: ExperienceData[];
}

export function Experience() {
  const { data } = useQuery<GetExperiencesResponse>(GET_EXPERIENCES);

  const [selectedExperienceId, setSelectedExperienceId] = useState(
    data?.experiences[0].id,
  );
  const [selectedExperience, setSelectedExperience] = useState<ExperienceData | null>(null);

  useEffect(() => {
    setSelectedExperienceId(data?.experiences[0].id);
  }, [data]);

  const [experienceDetailIsMounting, setExperienceDetailIsMounting] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setExperienceDetailIsMounting(false);
    }, 100);
    return () => clearTimeout(timeout);
  }, [experienceDetailIsMounting]);

  const handleExperienceChange = useCallback((id: string) => {
    setExperienceDetailIsMounting(true);
    setSelectedExperienceId(id);
  }, []);

  useEffect(() => {
    if (selectedExperienceId) {
      const selectedExperienceFound = data?.experiences.find(
        (experience) => experience.id === selectedExperienceId,
      );

      if (selectedExperienceFound) {
        const selectedExperienceFoundFormatted = {
          ...selectedExperienceFound,
          startDate: formatDate(selectedExperienceFound?.startDate),
          endDate: formatDate(selectedExperienceFound?.endDate),
        } as ExperienceData;

        setSelectedExperience(selectedExperienceFoundFormatted);
      }
    }
  }, [selectedExperienceId]);

  if (data?.experiences) {
    return (
      <Box
        mt={20}
        w="100%"
        display="flex"
        as={Reveal}
        delay={300}
        keyframes={revealAnimation}
        triggerOnce
        width="70%"
      >
        <Flex w="100%" mt="40" flexDir="column" as="section" id="experience">
          <SectionTitle name="Experience" number={2} justify="flex-start" />
          <Flex>
            <ExperienceList
              experiences={data?.experiences}
              selectedExperienceId={selectedExperienceId}
              onExperienceChange={handleExperienceChange}
            />
            <ExperienceDetail
              experience={selectedExperience}
              isMounting={experienceDetailIsMounting}
            />
          </Flex>
        </Flex>
      </Box>
    );
  }
  return null;
}
