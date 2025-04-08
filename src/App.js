import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Insights from './pages/Insights';
import Quant from './pages/Quant';
import Systems from './pages/Systems';
import Contact from './pages/Contact';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/quant" element={<Quant />} />
        <Route path="/systems" element={<Systems />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;