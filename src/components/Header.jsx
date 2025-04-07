import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Sarah Yoojin Park</h1>
        <nav className="space-x-6">
            <Link to="/about" className="text-gray-700 hover:text-blue-500">About</Link>
          <a href="#insights" className="text-gray-700 hover:text-blue-500">Insights</a>
          <a href="#systems" className="text-gray-700 hover:text-blue-500">Systems</a>
          <a href="#quant" className="text-gray-700 hover:text-blue-500">Quant Lab</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500">Reach Out</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;