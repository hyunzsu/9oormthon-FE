import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Detail from './pages/Detail'
import Space from './pages/Space'
import Reservation from './pages/Reservation'
import UserSuccess from './pages/UserSuccess'
import OwnerSuccess from './pages/OwnerSuccess'

function App() {
  return (
    <div className="app w-full max-w-[430px] h-auto min-h-screen mx-auto bg-white shadow-md relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ownersuccess" element={<OwnerSuccess />} />
        <Route path="/products" element={<Space />} />
        <Route path="/products/:id" element={<Detail />} />
        <Route path="/products/:id/reservation" element={<Reservation />} />
        <Route path="/usersuccess" element={<UserSuccess />} />
      </Routes>
    </div>
  )
}

export default App
