import { Flex } from '@chakra-ui/react';
import { gql, useQuery } from '@apollo/client';
import { useCallback, useEffect, useState } from 'react';
import { SectionTitle } from '../utils/SectionTitle';
import { ExperienceDetail } from './ExperienceDetail';
import { ExperienceList } from './ExperiencesList';

const GET_EXPERIENCES = gql`
  query GetExperiences {
    experiences {
      id
      place
      office
      duties
      startDate
      endDate
    }
  }
`;

interface GetExperiencesResponse {
  experiences: {
    id: string;
    place: string;
    office: string;
    duties: string[];
    startDate: string;
    endDate: string | null;
  }[];
}

export function Experience() {
  const { data } = useQuery<GetExperiencesResponse>(GET_EXPERIENCES);

  const [selectedExperienceId, setSelectedExperienceId] = useState(
    data?.experiences[0].id,
  );
  const [selectedExperience, setSelectedExperience] = useState({} as any);

  useEffect(() => {
    setSelectedExperienceId(data?.experiences[0].id);
  }, [data]);

  const handleExperienceChange = useCallback((id: string) => {
    setSelectedExperienceId(id);
  }, []);

  useEffect(() => {
    const selectedExperienceFound = data?.experiences.find(
      (experience) => experience.id === selectedExperienceId,
    );
    setSelectedExperience(selectedExperienceFound);
  }, [selectedExperienceId]);

  if (data?.experiences) {
    return (
      <Flex width="70%" mt="40" flexDir="column" mb="20">
        <SectionTitle name="Experience" number={2} justify="flex-start" />
        <Flex>
          <ExperienceList
            experiences={data?.experiences}
            selectedExperienceId={selectedExperienceId}
            onExperienceChange={handleExperienceChange}
          />
          <ExperienceDetail experience={selectedExperience} />
        </Flex>
      </Flex>
    );
  }
  return null;
}
