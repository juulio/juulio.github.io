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
    id: 'volcanic-eruption',
    title: 'GLSL Volcanic Eruption',
    description:
      'Generative graphics exploring volcanic patterns using GLSL shaders',
    link: '#',
    tags: ['GLSL', 'Shaders', 'Generative'],
    year: 2021,
  },
]
