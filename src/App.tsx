import { Flex, useBreakpointValue } from '@chakra-ui/react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MainPresentation } from './components/MainPresentation';
import { Projects } from './components/Projects';
import { Sidebar } from './components/Header/Sidebar';
import { SocialMediaList } from './components/SocialMediaList';
import { TechnologiesSection } from './components/TechnologiesSection';
import 'keen-slider/keen-slider.min.css';

function App() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <Header />
      {!isWideVersion ? <Sidebar /> : <SocialMediaList />}
      <Flex
        as="main"
        mx="auto"
        justify="center"
        flexDir="column"
        alignItems="center"
        maxWidth={1160}
        overflowX="hidden"
        px={{
          base: 6,
          md: 12,
          lg: 20,
          xl: 6,
        }}
        zIndex={1000}
      >
        <MainPresentation />
        <About />
        <TechnologiesSection />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </Flex>
    </>
  );
}

export default App;
