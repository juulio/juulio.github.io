import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Nav'
import BlockHome from './BlockHome'
import BlockSoftware from './BlockSoftware'
import BlockKarate from './BlockKarate'
import Footer from './Footer'
import { Canvas } from '@react-three/fiber'

import Block3d from './Block3d'

function App() {
  return (
    <>
      <Canvas style={{ width: '100vw', height: '100vh', position: 'fixed' }}>
        <Block3d />
      </Canvas>
      <BrowserRouter>
        <Nav />
        <main>
          <Routes>
            <Route path="/software" element={<BlockSoftware />} />
            <Route path="/karate" element={<BlockKarate />} />
            <Route path="/" element={<BlockHome />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
