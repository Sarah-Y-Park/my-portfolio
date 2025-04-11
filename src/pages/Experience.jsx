import { useState } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';



function Expereince() {
  const [activeIndex, setActiveIndex] = useState(null);

  const experiences = [
    {
      type: 'work',
      title: 'Data Analyst Assistant',
      company: '@University of Calgary',
      period: 'Jan 2025 - Mar 2025',
      location: 'Caglary, Canada',
      status: 'Internship, Full-time',
      description:
        '',
      skills: ['Power BI', 'Power Query', 'Qualitative Data', 'Topic Modeling', 'Qualtrics'],
    },
    {
        type: 'break',
        title: '2-Year Career Break for Parenting (Hardest Project I’ve Ever Managed)',
        period: '2022 - 2025',
    },
    {
      type: 'education',
      title: 'Information Technology, Software Development',
      company: '@Southern Alberta Institute of Technology',
      period: '2022',
      location: 'Calgary, Canada',
      status: 'Diploma',
      description: 'Completed a two-year intensive program focused on full-stack web development, including HTML, CSS, JavaScript, React, Node.js, and database management.',
      skills: ['React', 'JavaScript','Java','HTML','CSS', 'Node.js', 'SQL','Figma','Web Development', 'Front-end Development','Back-end Development'],
    },

    {
        type: 'work',
        title: 'Data Analyst',
        company: '@Samwoo A System',
        period: 'May 2019 - Aug 2020',
        location: 'South Korea',
        status: 'Parmanent, Full-time',
        description:
          '',
        skills: ['Power BI', 'Business Intelligence', 'Workflow Automation','Financial Reporting','Risk Analysis'],
      },
      {
        type: 'work',
        title: 'Data Analyst',
        company: '@Boozaapp Company',
        period: 'Oct 2018 - Apr 2019',
        location: 'South Korea',
        status: 'Parmanent, Full-time',
        description:
          '',
        skills: ['Python','SQL','MySQL', 'Power BI', 'Google Anayltics', 'Google ads', 'Facebook ads','Survey Data', 'User logs','Growth Marketing'],
      },
      {
        type: 'work',
        title: 'Data Analyst',
        company: '@Andbeyond Capital Management',
        period: 'Sep 2016 - Sep 2018',
        location: 'South Korea',
        status: 'Parmanent, Full-time',
        description:
          '',
        skills: ['Power BI', 'Business Intelligence','Workflow Automation', 'R', 'Python', 'SQL', 'MSSQL', 'Quantitative Finance','Statistical Finance', 'Financial Modeling'],
      },

      {
        type: 'education',
        title: 'Health Services Management, English-American Culture',
        company: '@Kyung Hee University',
        period: '2015',
        location: 'South Korea',
        status: 'Bachelor of Business Administration, Arts',
        description: 'Completed a two-year intensive program focused on full-stack web development, including HTML, CSS, JavaScript, React, Node.js, and database management.',
        skills: ['Business Administration', 'Marketing Strategy', 'Quantitative', 'Economics','Finance'],
      },
  ];

  const toggleBox = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
  <section id="experience" className="py-24 px-6 text-sm sm:text-base hidden md:block">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-center text-2xl font-bold text-pink-500 mb-12">Experience & Education</h2>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index}>
            {exp.type === 'break' ? (
              <div className="w-full text-center px-6 py-3 border-2 border-dashed border-pink-300 text-gray-500 font-semibold bg-white rounded-md whitespace-pre-line">
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
                  <div>
                    <div className="flex items-center gap-3">
                      {exp.type === 'work' ? (
                        <Briefcase className="w-5 h-5" />
                      ) : (
                        <GraduationCap className="w-5 h-5" />
                      )}
                      <div className="flex flex-col text-left">
                        <span>{exp.title}</span>
                        <span className="text-sm">{exp.company}</span>
                      </div>
                    </div>

                  </div>

                  <span className="ml-auto flex items-center gap-4">
                    {exp.period}
                    <span className="text-lg font-bold">
                      {activeIndex === index ? '–' : '+'}
                    </span>
                  </span>
                </button>

                {activeIndex === index && (
                  <div className="bg-white p-6 rounded-md shadow border mt-2">
                    {exp.location && (
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>📍 {exp.location}</strong>{' '}
                        <strong>🏷️ {exp.status}</strong>{' '}
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
