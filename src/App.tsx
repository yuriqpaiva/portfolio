// import { Text } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Header } from './components/Header';
import { MainPresentation } from './components/MainPresentation';
import { SocialMediaList } from './components/SocialMediaList';

function App() {
  return (
    <>
      <Header />
      <SocialMediaList />
      <Box as="main">
        <MainPresentation />
      </Box>
    </>
  );
}

export default App;
