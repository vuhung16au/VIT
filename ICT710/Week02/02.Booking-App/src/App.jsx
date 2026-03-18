import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Appointments from './pages/Appointments';
import InteractionTypes from './pages/InteractionTypes';
import Instructing from './pages/Instructing';
import Conversing from './pages/Conversing';
import Manipulating from './pages/Manipulating';
import Exploring from './pages/Exploring';
import ProblemSpace from './pages/ProblemSpace';
import ConceptualModel from './pages/ConceptualModel';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interaction-types" element={<InteractionTypes />} />
        <Route path="/interaction-types/instructing" element={<Instructing />} />
        <Route path="/interaction-types/conversing" element={<Conversing />} />
        <Route path="/interaction-types/manipulating" element={<Manipulating />} />
        <Route path="/interaction-types/exploring" element={<Exploring />} />
        <Route path="/problem-space" element={<ProblemSpace />} />
        <Route path="/problem-space/conceptual-model" element={<ConceptualModel />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </Layout>
  );
}
