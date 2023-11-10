export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: "../../dist/assets/icons/frontend.png",
  },
  {
    title: 'Backend Developer',
    icon: "../../dist/assets/icons/backend.png",
  },
  {
    title: 'UI/UX Design',
    icon: "../../dist/assets/icons/ux.png",
  },
  {
    title: 'Software Engineering Instruction',
    icon: "../../dist/assets/icons/prototyping.png",
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: "../../dist/assets/tech/html.png",
  },
  {
    name: 'CSS 3',
    icon: "../../dist/assets/tech/css.png",
  },
  {
    name: 'JavaScript',
    icon: "../../dist/assets/tech/javascript.png",
  },
  {
    name: 'TypeScript',
    icon: "../../dist/assets/tech/typescript.png",
  },
  {
    name: "Python",
    icon: "../../dist/assets/tech/python.png"
  },
  {
    name: "C#",
    icon: "../../dist/assets/tech/csharp.png"
  },
  {
    name: 'React JS',
    icon: "../../dist/assets/tech/reactjs.png",
  },
  {
    name: 'Tailwind CSS',
    icon: "../../dist/assets/tech/tailwind.png",
  },
  {
    name: 'Node JS',
    icon: "../../dist/assets/tech/nodejs.png",
  },
  {
    name: 'Django',
    icon: "../../dist/assets/tech/django.png"
  },
  {
    name: ".NET",
    icon: "../../dist/assets/tech/dotnet.png"
  },
  {
    name: 'Rails',
    icon: "../../dist/assets/tech/rubyrails.png",
  },
  {
    name: 'postgresql',
    icon: "../../dist/assets/tech/postgresql.png",
  },
  {
    name: 'git',
    icon: "../../dist/assets/tech/git.png",
  }
];

const experiences = [
  {
    title: 'Doorman',
    company_name: 'Palmolive Condominiums',
    icon: "/company/coverhunt.png",
    iconBg: '#333333',
    date: 'Oct 2020 - Jun 2021',
  },
  {
    title: 'Full Stack Software Engineer Instructor Assistant',
    company_name: 'General Assembly',
    icon: "/company/microverse.png",
    iconBg: '#333333',
    date: 'Mar 2021 - Present',
  },
  {
    title: 'Software Documentation Engineer',
    company_name: 'General Assembly',
    icon: "/company/kelhel.png",
    iconBg: '#333333',
    date: 'Jun 2023 - Aug 2023',
  },
  {
    title: 'Freelance React Software Engineer',
    company_name: 'Garage Builders Plus',
    icon: "/company/dcc.png",
    iconBg: '#333333',
    date: 'Mar 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'uCommute',
    description: 'A mobile application for Chicago transit that shows real-time arrival schedules of trains at stations for users.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: "../../dist/assets/projects/komikult.png",
    repo: 'https://github.com/jurgenstevens/ucommute-front',
    demo: 'https://ucommute.netlify.app/',
  },
  {
    id: 'project-2',
    name: 'Garage Builders Plus',
    description:
      'An informative platform for a garage building company based in Chicago, Illinois. It provides visitors with company information, an about page, and showcases a gallery of the company\'s previous projects..',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      }
    ],
    image: "../../dist/assets/projects/leaderboard.png",
    repo: 'https://github.com/jurgenstevens/garage-builders-plus',
    demo: 'https://garagebuilderspluschi.netlify.app/',
  },
  {
    id: 'project-3',
    name: 'Hillbomber',
    description: 'An interactive experience created using HTML Canvas, JavaScript, jQuery, and a combination of functional and object-oriented programming paradigms. In this game, you navigate the streets of San Francisco on a skateboard, skillfully avoiding obstacles like potholes, dogs, and cars.',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'html canvas',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: "../../dist/assets/projects/math-magicians.png",
    repo: 'https://github.com/jurgenstevens/hillbomber',
    demo: 'https://jurgenstevens.github.io/hillbomber/',
  },
  {
    id: 'project-4',
    name: 'Archer Skateshop',
    description: `Crafted as an e-commerce platform specializing in skateboarding, this project was meticulously constructed using the robust trio of Bootstrap, Javascript, and React.js.`,
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'purple-text-gradient',
      },
    ],
    image: "../../dist/assets/projects/movie-metro.png",
    repo: 'https://github.com/jurgenstevens/archer-skateshop',
    demo: 'https://archerskateshop.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Deciphr',
    description:
      'A user-friendly application that allows you to decipher and compare lyrical insights with others. Users can immerse themselves in the world of music input and save lyrical guesses, fostering a sense of community and camaraderie in unraveling the mysteries of lyrics.',
    tags: [
      {
        name: 'python',
        color: 'green-text-gradient',
      },
      {
        name: 'django',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: "../../dist/assets/projects/nyeusi.png",
    repo: 'https://github.com/jurgenstevens/deciphr',
    demo: 'https://deciphr.onrender.com/',
  },
];

export { services, technologies, experiences, projects };
