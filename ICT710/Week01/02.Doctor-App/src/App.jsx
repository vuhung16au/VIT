import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import DoctorProfile from './pages/DoctorProfile'
import Booking from './pages/Booking'
import MedicalRecords from './pages/MedicalRecords'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:id" element={<DoctorProfile />} />
          <Route path="/booking/:doctorId" element={<Booking />} />
          <Route path="/records" element={<MedicalRecords />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
