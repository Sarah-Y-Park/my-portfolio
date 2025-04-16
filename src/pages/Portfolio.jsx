import { useState } from 'react';

const tabs = ["All", "BI", "Systems", "Quant"];

const projects = [
  { id: 1, category: "Systems", title: "Coming soon!", bg: " bg-pink-400" },
  { id: 2, category: "BI", title: "Coming soon!", bg: " bg-pink-300" },
  { id: 3, category: "Quant", title: "Coming soon!", bg: " bg-pink-200" },
  { id: 4, category: "Quant", title: "Coming soon!", bg: " bg-pink-100" },


];

function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    
    <section id="portfolio" className="py-24 relative min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-cente text-pink-500 mb-4">Portfolio</h2>
        <div className="w-24 h-1 bg-pink-500 mb-6"></div>
          {/* Tab Filter */}
          <div className="flex justify-center gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full border ${
                  activeTab === tab
                    ? " bg-pink-500 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                } transition`}
              >
                {tab}
              </button>
            ))}
          </div>

            {/* Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`relative group h-48 rounded-xl overflow-hidden shadow ${project.bg}`}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <span className="text-white font-semibold text-lg">{project.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-[1]"
      style={{
        backgroundColor: '#fdf2f8',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f496ed' fill-opacity='0.24' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-[80px] rotate-180"
        >
          <path
            d="M0,60 C150,140 350,-40 500,60 L500,150 L0,150 Z"
            fill="white"
            fill-opacity="1"
          />
        </svg>
      </div>
    </section>
  );
}

export default Portfolio;