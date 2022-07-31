import { Flex, useBreakpointValue } from '@chakra-ui/react';
import { About } from './components/About';
import { ArrowDropDown } from './components/ArrowDropDown';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MainPresentation } from './components/MainPresentation';
import { Projects } from './components/Projects';
import { Sidebar } from './components/Sidebar';
import { SocialMediaList } from './components/SocialMediaList';

function App() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <Header />
      {!isWideVersion && <Sidebar />}
      <SocialMediaList />
      <Flex
        as="main"
        mx="auto"
        justify="center"
        flexDir="column"
        alignItems="center"
        maxWidth={1160}
        overflowY="auto"
        overflowX="hidden"
      >
        <MainPresentation />
        <ArrowDropDown />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </Flex>
    </>
  );
}

export default App;
