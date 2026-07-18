export interface Project {
  id: string
  title: string
  description: string
  link: string
  tags: string[]
  year: number
  thumbnail?: string
}

export const projects: Project[] = [
  {
    id: 'tamashii',
    title: 'Tamashii Martial Arts',
    description:
      'Interactive martial arts web experience with immersive 3D elements',
    link: 'http://tamashiiarts.net/',
    tags: ['Three.js', 'WebGL', 'Interactive'],
    year: 2022,
  },
  {
    id: 'anas-harp',
    title: "Ana's Harp",
    description: 'Musical experience showcasing harp performances',
    link: 'https://anas-harp.com/',
    tags: ['React', 'Web Design'],
    year: 2021,
  },
  {
    id: 'volcanic-eruption',
    title: 'GLSL Volcanic Eruption',
    description:
      'Generative graphics exploring volcanic patterns using GLSL shaders',
    link: '#',
    tags: ['GLSL', 'Shaders', 'Generative'],
    year: 2021,
  },
  {
    id: 'project-4',
    title: 'Project 4',
    description: 'Add your project description here',
    link: '#',
    tags: ['Three.js', 'Interactive'],
    year: 2024,
  },
  {
    id: 'project-5',
    title: 'Project 5',
    description: 'Add your project description here',
    link: '#',
    tags: ['React', 'WebGL'],
    year: 2024,
  },
  {
    id: 'project-6',
    title: 'Project 6',
    description: 'Add your project description here',
    link: '#',
    tags: ['Three.js', 'Generative'],
    year: 2023,
  },
  {
    id: 'project-7',
    title: 'Project 7',
    description: 'Add your project description here',
    link: '#',
    tags: ['GLSL', 'Shaders'],
    year: 2023,
  },
  {
    id: 'project-8',
    title: 'Project 8',
    description: 'Add your project description here',
    link: '#',
    tags: ['Interactive', 'Web Design'],
    year: 2023,
  },
  {
    id: 'project-9',
    title: 'Project 9',
    description: 'Add your project description here',
    link: '#',
    tags: ['Three.js', 'React'],
    year: 2022,
  },
  {
    id: 'project-10',
    title: 'Project 10',
    description: 'Add your project description here',
    link: '#',
    tags: ['WebGL', 'Generative'],
    year: 2022,
  },
  {
    id: 'project-11',
    title: 'Project 11',
    description: 'Add your project description here',
    link: '#',
    tags: ['Three.js', 'Interactive'],
    year: 2022,
  },
  {
    id: 'project-12',
    title: 'Project 12',
    description: 'Add your project description here',
    link: '#',
    tags: ['React', 'GLSL'],
    year: 2021,
  },
]
