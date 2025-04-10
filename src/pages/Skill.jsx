import { motion } from 'framer-motion';
import { FaDatabase, FaChartBar, FaTools, FaCode } from 'react-icons/fa';

function Skill() {
  const skillCategories = [
    {
      title: 'Data Analysis & Visualization',
      icon: <FaChartBar size={28} className="text-pink-500" />,
      skills: ['SQL (MSSQL, MySQL)', 'Power BI', 'Tableau', 'Power Query', 'Google Analytics', 'Data Cleaning', 'Data Transformation'],
    },
    {
      title: 'ETL & Process Automation',
      icon: <FaDatabase size={28} className="text-pink-500" />,
      skills: ['Power Query', 'Report Automation', 'Workflow Optimization'],
    },
    {
      title: 'Tools & Platforms',
      icon: <FaTools size={28} className="text-pink-500" />,
      skills: ['MS Office', 'Outlook', 'SharePoint', 'Canva', 'Qualtrics'],
    },
    {
      title: 'Programming & Scripting',
      icon: <FaCode size={28} className="text-pink-500" />,
      skills: ['Java', 'JavaScript', 'HTML', 'CSS', 'Python', 'R'],
    },
  ];

  return (
    <section id="skills" className="bg-[#FBFBFB] py-24 px-6">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-center text-2xl font-bold text-pink-500 mb-12"> Skills </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow p-6 border border-pink-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-pink-100 text-pink-600 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
