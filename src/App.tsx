import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './pages/Nav'
import BlockHome from './pages/BlockHome'
import BlockWork from './pages/BlockWork'
import BlockKarate from './pages/BlockKarate'
import BlockAbout from './pages/BlockAbout'
import Footer from './pages/Footer'
import { Canvas } from '@react-three/fiber'

import Block3d from './pages/Block3d'

function App() {
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
        <Block3d />
      </Canvas>
      <BrowserRouter>
        <div className="maxWidth">
          <Nav />
          <main>
            <Routes>
              <Route path="/software" element={<BlockWork />} />
              <Route path="/karate" element={<BlockKarate />} />
              <Route path="/about" element={<BlockAbout />} />
              <Route path="/" element={<BlockHome />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
