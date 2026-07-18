import { useLocation } from 'react-router-dom'
import Block3d from './Block3d'
import ParticlesScene from './ParticlesScene'
import VoronoiScene from './VoronoiScene'
import FluidSimScene from './FluidSimScene'

export default function SceneManager() {
  const location = useLocation()

  if (location.pathname === '/projects/particles') {
    return <ParticlesScene />
  }
  if (location.pathname === '/projects/voronoi') {
    return <VoronoiScene />
  }
  if (location.pathname === '/projects/fluid') {
    return <FluidSimScene />
  }

  // Default: background shader for home
  return <Block3d />
}
