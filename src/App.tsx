import { Flex } from '@chakra-ui/react';
import { About } from './components/About';
import { ArrowDropDown } from './components/ArrowDropDown';
import { Header } from './components/Header';
import { MainPresentation } from './components/MainPresentation';
import { SocialMediaList } from './components/SocialMediaList';

function App() {
  return (
    <>
      <Header />
      <SocialMediaList />
      <Flex
        as="main"
        mx="auto"
        justify="center"
        flexDir="column"
        alignItems="center"
        maxWidth={1160}
        overflowY="auto"
      >
        <MainPresentation />
        <ArrowDropDown />
        <About />
      </Flex>
    </>
  );
}

export default App;
