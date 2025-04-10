import Experience from './Experience'; 
import Skill from './Skill'; 

function About() {
  return (
    <>
      <section id="about" className="bg-[#FBFBFB] py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/*First Section - About & Experetise */}
          <h2 className="text-3xl font-extrabold text-pink-500 mb-4">About</h2>
          <div className="w-24 h-1 bg-pink-500 mb-6"></div>

          <p className="text-gray-800 text-sm md:text-base font-semibold leading-relaxed mb-16 max-w-4xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </p>

          <h3 className="text-center text-2xl font-bold text-pink-500 mb-12">My Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-40 h-40 bg-gray-300 rounded-full mb-4" />
                <p className="font-semibold">galley of type and scrambled</p>
                <p className="text-sm text-gray-600">
                  galley of type and galley of<br />type and scrambled
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Section - Experience */}
      <Experience />

      {/* Third Section - Skill */}
      <Skill />
    </>
  );
}
export default About;
