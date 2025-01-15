import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Particle = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          zIndex: -1,
        },
        fpsLimit: 1000,

        particles: {
          number: {
            value: 50,

            density: {
              enable: true,
              value_area: 800,
            },
          },

          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 3,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 2 },
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 200,
            color: 'random',
            opacity: 0.4,
            width: 0,
            triangles: {
              enable: true,
              color: '#ffffff',
              opacity: 0.1,
            },
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse',
            },
            onclick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default Particle;
