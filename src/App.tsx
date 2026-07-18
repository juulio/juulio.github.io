import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './pages/Nav'
import BlockHome from './pages/BlockHome'
import BlockWork from './pages/BlockWork'
import BlockKarate from './pages/BlockKarate'
import Footer from './pages/Footer'
import { Canvas } from '@react-three/fiber'
import SceneManager from './components/scenes/SceneManager'
import ParticlesPage from './pages/projects/ParticlesPage'

function AppContent() {
  return (
    <>
      <Canvas
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          zIndex: '-1',
        }}
      >
        <SceneManager />
      </Canvas>
      <div className="maxWidth">
        <Nav />
        <main>
          <Routes>
            <Route path="/work" element={<BlockWork />} />
            <Route path="/projects/particles" element={<ParticlesPage />} />
            <Route path="/karate" element={<BlockKarate />} />
            <Route path="/" element={<BlockHome />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
