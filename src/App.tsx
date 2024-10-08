import './app.css'
import "./components/figures/figures.css"
import Home from './components/home/Home'

import { Suspense, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
import { AppContextProvider } from './context/AppContext';
import Skills from './components/skills/Skills';
import MainWrapper from './components/main/MainWrapper';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
// import { loadFull } from "tsparticals/"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.


const App = () => {
  const [init, setInit] = useState(false);


  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#010230",
        },
        links: {
          color: "#80b2fc",
          distance: 700,
          enable: true,
          opacity: 1,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 30,
        },
        opacity: {
          value: .9,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 200 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <AppContextProvider>
            <div className="app">
              <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
                className=''
              />  
              <MainWrapper>
                <Home />
                <Experience />
                <div className="skill-project-wrapper">
                <Skills />
                <Projects />
                </div>
                <Footer />
              </MainWrapper>
            </div>
        </AppContextProvider>
      </Suspense>
    );
  }

  return <>
      <Suspense fallback={<div>Loading...</div>}>
        <AppContextProvider>
          <div className="app">
            <Particles
              id="tsparticles"
              particlesLoaded={particlesLoaded}
              options={options}
              className=''
            />  
            <MainWrapper>
              <Home />
              <Experience />
              <div className="skill-project-wrapper">
              <Skills />
              <Projects />
              </div>
              <Footer />
            </MainWrapper>
          </div>
        </AppContextProvider>
      </Suspense>
    </>;
};

export default App
