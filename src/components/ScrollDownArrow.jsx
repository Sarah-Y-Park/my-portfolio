import { RiArrowDownDoubleLine  } from 'react-icons/ri';
import { Link } from 'react-scroll';

function ScrollDownArrow({ to = "about" }) {
  return (
    <div className="w-full flex justify-center mt-12 hidden md:block">
      <Link
        to={to}
        smooth={true}
        duration={800}
        offset={-60}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-pink-500 text-2xl animate-bounce cursor-pointer z-10"
      >
        <RiArrowDownDoubleLine  className="text-pink-200 text-7xl hover:text-pink-300 transition" />
      </Link>
    </div>
  );
}

export default ScrollDownArrow;
