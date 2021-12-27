import Title from "./components/Title";
import { COLOURS, RandomColour } from './colours';
import { useMemo } from "preact/hooks";
import { About } from "./components/About";
import NowPlaying from "./components/NowPlaying";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export function App() {
  const randomColour = useMemo(() => COLOURS[Math.floor(Math.random() * COLOURS.length)], []);

  return (
    <div style={{ '--accent': randomColour }}>
      <RandomColour.Provider value={randomColour}>
        <Title />
        <NowPlaying />
        <About />
        <Projects />
        <Footer />
      </RandomColour.Provider>
    </div>
  )
}
