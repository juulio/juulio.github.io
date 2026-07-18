import DemoTemplate from '../../components/demos/DemoTemplate'
import { getDemoById } from '../../data/demosMetadata'

export default function VoronoiPage() {
  const demo = getDemoById('voronoi')

  if (!demo) {
    return <div>Demo not found</div>
  }

  return (
    <DemoTemplate
      title={demo.title}
      description={demo.description}
      tags={demo.tags}
      year={demo.year}
    />
  )
}
