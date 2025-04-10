import { Link } from 'react-scroll';

function Header({ onHomeClick }) {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <nav className="space-x-8 text-sm font-medium">
          <Link
            to="main"
            smooth={true}
            duration={800}
            offset={-60}
            className="text-gray-700 hover:text-pink-500 cursor-pointer transition"
            onClick={onHomeClick}
          >
            Home
          </Link>
          <Link to="about" smooth duration={800} offset={-60} className="text-gray-700 hover:text-pink-500 cursor-pointer transition">
            About
          </Link>
          <Link to="portfolio" smooth duration={800} offset={-60} className="text-gray-700 hover:text-pink-500 cursor-pointer transition">
            Portfolio
          </Link>
          <Link to="contact" smooth duration={800} offset={-60} className="text-gray-700 hover:text-pink-500 cursor-pointer transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
