import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
      <Link to="/">
        <h1 className="text-xl font-bold text-blue-600 hover:underline">Sarah Yoojin Park</h1>
      </Link>
        <nav className="space-x-6">
            <Link to="/about" className="text-gray-700 hover:text-blue-500">About</Link>
            <Link to="/insights" className="text-gray-700 hover:text-blue-500">Insights</Link>
            <Link to="/systems" className="text-gray-700 hover:text-blue-500">Systems</Link>
            <Link to="/quant" className="text-gray-700 hover:text-blue-500">Quant Lab</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-500">Reach Out</Link>

        </nav>
      </div>
    </header>
  );
}

export default Header;