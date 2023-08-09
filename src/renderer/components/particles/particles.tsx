import Particles from 'react-particles';
import { Engine, IOptions, RecursivePartial } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

let numParticles = 150;

if (process.env.NODE_ENV !== 'development' && typeof window !== 'undefined') {
  const { innerWidth: width, innerHeight: height } = window;
  const divisor = 10000;

  numParticles = (width * height) / divisor;
}

const particleParams: RecursivePartial<IOptions> = {
  particles: {
    number: {
      density: {
        enable: true,
      },
      value: numParticles,
    },
    color: {
      value: '#fff',
    },
    size: {
      value: 3,
      random: true,
    },
    opacity: {
      value: 0.9,
      random: true,
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.7,
      width: 1.5,
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
      outModes: {
        default: 'bounce',
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'link',
      },
      onclick: {
        enable: false,
        mode: 'push',
      },
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.7,
        },
        // distance: 1000
      },
    },
    detect_on: 'window',
  },
};

function ParticlesContainer() {
  async function initParticles(engine: Engine) {
    await loadSlim(engine);
  }

  return (
    <div
      style={{
        position: 'fixed',
        background:
          'linear-gradient(120deg, rgba(34,35,39,1) 0%, rgba(43,40,41,1) 100%)',

        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
      }}
      data-aos="zoom-out"
      data-aos-duration="1500"
    >
      <Particles
        id="tsparticles"
        style={{ position: 'absolute' }}
        // eslint-disable-next-line react/jsx-no-bind
        init={initParticles}
        options={particleParams}
      />
    </div>
  );
}

export default ParticlesContainer;
