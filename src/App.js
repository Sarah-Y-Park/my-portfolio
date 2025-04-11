import { Routes, Route, useLocation } from 'react-router-dom'; 
import Header from './components/Header';
import Home from './pages/Home';
import Resume from './pages/Resume';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const location = useLocation(); 

  return (
    <div className="scroll-smooth">

      {location.pathname !== "/resume" && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>

      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
