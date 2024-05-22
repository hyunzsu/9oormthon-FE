import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div className="app w-full max-w-[430px] h-auto min-h-screen mx-auto bg-white shadow-md relative">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/map" element={<Map />} /> */}
      </Routes>
    </div>
  )
}

export default App
