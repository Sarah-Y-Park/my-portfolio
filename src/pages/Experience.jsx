import { useState } from 'react';

function Expereince() {
  const [activeIndex, setActiveIndex] = useState(null);

  const experiences = [
    {
      type: 'work',
      title: 'Data Analyst Assistant @ University of Calgary, Centre for Career and Personal Development',
      period: 'Jan 2025 - Mar 2025',
      location: 'Caglary, Canada',
      status: 'Internship, Full-time',
      description:
        '',
      skills: ['DevOps', 'CI/CD', 'Kubernetes', 'JS/TS', 'NextJS'],
    },
    {
        type: 'break',
        title: '2 Years Career Break for Childcare',
        period: '2022 - 2025',
    },
    {
      type: 'education',
      title: 'Software Development Diploma @ Southern Alberta Institute of Technology',
      period: '2022',
      location: 'Calgary, Canada',
      description: 'Completed a two-year intensive program focused on full-stack web development, including HTML, CSS, JavaScript, React, Node.js, and database management.',
      skills: ['React', 'JavaScript', 'Node.js', 'SQL'],
    },

    {
        type: 'work',
        title: 'Data Analyst @ Samwoo A System',
        period: 'May 2019 - Aug 2020',
        location: 'South Korea',
        status: 'Parmanent, Full-time',
        description:
          '',
        skills: ['DevOps', 'CI/CD', 'Kubernetes', 'JS/TS', 'NextJS'],
      },
      {
        type: 'work',
        title: 'Data Analyst @ Boozaapp Company (Fintech Startup)',
        period: 'Oct 2018 - Apr 2019',
        location: 'South Korea',
        status: 'Parmanent, Full-time',
        description:
          '',
        skills: ['DevOps', 'CI/CD', 'Kubernetes', 'JS/TS', 'NextJS'],
      },
      {
        type: 'work',
        title: 'Data Analyst @ Andbeyond Capital Management (Financial advisory company)',
        period: 'Sep 2016 - Sep 2018',
        location: 'South Korea',
        status: 'Parmanent, Full-time',
        description:
          '',
        skills: ['DevOps', 'CI/CD', 'Kubernetes', 'JS/TS', 'NextJS'],
      },

      {
        type: 'education',
        title: 'Bachelor of Business Administration, Arts @ Kyung Hee University',
        period: '2015',
        location: 'South Korea',
        description: 'Completed a two-year intensive program focused on full-stack web development, including HTML, CSS, JavaScript, React, Node.js, and database management.',
        skills: ['React', 'JavaScript', 'Node.js', 'SQL'],
      },
  ];

  const toggleBox = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-[#FBFBFB] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-2xl font-bold text-pink-500 mb-12"> Experience & Educaiton </h2>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index}>
              {exp.type === 'break' ? (
                <div className="w-full text-center px-6 py-3 border-2 border-dashed border-pink-300 text-gray-500 font-semibold bg-white rounded-md">
                  {exp.title}
                </div>
              ) : (
                <>
                  <button
                    onClick={() => toggleBox(index)}
                    className={`w-full flex justify-between items-center text-left px-6 py-4 font-semibold rounded-md transition-colors duration-300 ${
                      activeIndex === index
                        ? 'bg-pink-500 text-white'
                        : exp.type === 'education'
                        ? 'bg-purple-200 text-purple-800'
                        : 'bg-pink-200 text-pink-800'
                    }`}
                  >
                    <span>{exp.title}</span>
                    <span className="ml-auto flex items-center gap-2">
                      {exp.period}
                      <span className="text-lg font-bold">{activeIndex === index ? '–' : '+'}</span>
                    </span>
                  </button>

                  {activeIndex === index && (
                    <div className="bg-white p-6 rounded-md shadow border mt-2">
                      {exp.location && (
                        <p className="text-sm text-gray-600 mb-2">
                          <strong>📍 {exp.location}</strong>{' '}
                          <strong>📍 {exp.status}</strong>{' '}
                        </p>
                      )}
                      <p className="text-gray-700 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm bg-pink-100 text-pink-600 rounded-full font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expereince;
