import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Nav'
import BlockHome from './BlockHome'
import BlockSoftware from './BlockSoftware'
import BlockKarate from './BlockKarate'
import Footer from './Footer'

function App() {
  return (
    <>
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
