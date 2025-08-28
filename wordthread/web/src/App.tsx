import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Analyze from './pages/Analyze';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/analyze" element={<Analyze />} />
    </Routes>
  );
}

export default App;
