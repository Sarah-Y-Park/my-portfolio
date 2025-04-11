import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Header({ onHomeClick }) {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Navigation Tabs */}
        <nav className="space-x-8 text-sm font-medium">
          <Link
            to="main"
            smooth
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

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4 text-pink-500 text-xl">
          <a href="https://github.com/Sarah-Y-Park" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-700 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yoojinpark012" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gray-700 transition">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;