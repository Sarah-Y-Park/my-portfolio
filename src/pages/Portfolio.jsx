import { useState } from 'react';

const tabs = ["All", "BI", "Systems", "Quant"];

const projects = [
  { id: 1, category: "All", title: "Coming soon!", bg: " bg-pink-300" },

];

function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section id="portfolio" className="py-24">
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
    </section>
  );
}

export default Portfolio;