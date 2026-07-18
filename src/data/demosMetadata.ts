export interface DemoMetadata {
  id: string
  title: string
  description: string
  tags: string[]
  year: number
}

export const demos: DemoMetadata[] = [
  {
    id: 'particles',
    title: 'Particle System',
    description:
      'Interactive particle system with physics simulation and dynamic lighting',
    tags: ['WebGL', 'Particles', 'Three.js'],
    year: 2024,
  },
  {
    id: 'voronoi',
    title: 'Voronoi Diagram',
    description:
      'Generative Voronoi pattern visualization with animated color cycling',
    tags: ['WebGL', 'Generative', 'Procedural'],
    year: 2024,
  },
  {
    id: 'fluid',
    title: 'Fluid Simulation',
    description:
      'GPU-based fluid dynamics simulation with real-time visualization',
    tags: ['WebGL', 'Simulation', 'GPU'],
    year: 2024,
  },
]

export function getDemoById(id: string): DemoMetadata | undefined {
  return demos.find((demo) => demo.id === id)
}
