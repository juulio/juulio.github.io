export interface Project {
  id: string
  title: string
  description: string
  link: string
  tags: string[]
  year: number
  thumbnail?: string
  isDemoProject?: boolean
}

export const projects: Project[] = [
  {
    id: 'tamashii',
    title: 'Tamashii Martial Arts',
    description:
      'Tamashii Martial Arts Kyokushin Kan Costa Rica oficial website',
    link: 'http://tamashiiarts.net/',
    tags: ['wordpress', 'web', 'karate'],
    year: 2022,
  },
  {
    id: 'anas-harp',
    title: "Ana's Harp",
    description:
      'Ana Lizano Costa Rica Musical experience showcasing harp performances',
    link: 'https://anas-harp.com/',
    tags: ['wordpress', 'web'],
    year: 2021,
  },
  {
    id: 'particles',
    title: 'Particle System',
    description:
      'Interactive particle system with physics simulation and dynamic lighting',
    link: '/projects/particles',
    tags: ['webgl', 'Particles', 'Three.js'],
    year: 2024,
    isDemoProject: true,
  },
]
