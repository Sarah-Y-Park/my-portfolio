import Header from './components/Header';
import Home from './pages/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <Home />
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
