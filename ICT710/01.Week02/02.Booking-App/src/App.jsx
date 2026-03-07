import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Appointments from './pages/Appointments';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </Layout>
  );
}
