import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link as RouterLink} from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import ScrollDownArrow from '../components/ScrollDownArrow';


function Main() {
  const [currentText, setCurrentText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const textLines = [
    "Data Analyst.",
    "Problem Solver.",
    "Process Optimizer.",
    "Insight Storyteller."
  ];

  useEffect(() => {
    if (lineIndex < textLines.length) {
      const line = textLines[lineIndex];

      if (charIndex < line.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + line.charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + (lineIndex < textLines.length - 1 ? "\n" : ""));
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 500);
        return () => clearTimeout(timeout);
      }
    } else {
      setIsTypingComplete(true);
    }
  }, [charIndex, lineIndex]);

  return (
  <>
    <section
      id="main"
      className="relative w-full min-h-screen bg-pink-50 flex items-center justify-center px-6 text-sm sm:text-base"
      style={{
        backgroundColor: '#fdf2f8',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f496ed' fill-opacity='0.24' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`
        }}>
      <div className="max-w-7xl w-full flex flex-col md:flex-row-reverse items-center gap-20">
        {/* Profile Section */}
        <div className="relative w-[480px] h-[440px] hidden md:block">
          {/* Background Shape */}
          <div className="absolute bottom-0 w-full h-[240px] bg-pink-300 rounded-[160px]" />

          {/* Profile Image */}
          <img
            src="assets/Profile.png"
            alt="Sarah"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-3xl translate-y-[-3px] w-[480px] h-auto object-cover"
          />
        </div>

        {/* Left - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-900 w-full md:max-w-xl text-left md:pl-0"
        >
        <h1 className="text-pink-500 text-3xl sm:text-5xl md:text-6xl font-extrabold leading-snug mb-6"> Hi there!<br />I am Yoojin. </h1>
        <pre
            className="whitespace-pre-wrap text-lg sm:text-2xl md:text-4xl font-extrabold leading-tight min-h-[160px] w-full mb-20"
            style={{ lineHeight: '1.2', height: '160px' }}>
          {currentText}
          {!isTypingComplete && (
            <span className="inline-block w-[10px] h-10 bg-gray-300 ml-2 animate-pulse align-middle" />)}
        </pre>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <RouterLink
            to="/resume"
            className="px-4 py-1.5 text-sm sm:px-6 sm:py-2 sm:text-base border-2 border-pink-500 text-pink-600 font-bold rounded-full hover:bg-pink-500 hover:text-white transition"
          >
            Resume
          </RouterLink>
          <ScrollLink
              to="contact"
              smooth={true}
              duration={800}
              offset={-60}
              className="px-4 py-1.5 text-sm sm:px-6 sm:py-2 sm:text-base border-2 border-pink-500 text-pink-600 font-bold rounded-full hover:bg-pink-500 hover:text-white transition cursor-pointer">
              Contact
          </ScrollLink>
        </div>
      </motion.div>
    </div>

    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-[1]">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        className="w-full h-[80px]"
      >
        <path
          d="M0,60 C150,140 350,-40 500,60 L500,150 L0,150 Z"
          className="fill-white"
        ></path>
      </svg>
    </div>
  </section>

  <ScrollDownArrow to="about" />
</>

  );
}

export default Main;
