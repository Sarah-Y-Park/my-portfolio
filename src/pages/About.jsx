
import ScrollDownArrow from '../components/ScrollDownArrow';

function About() {
  const expertiseData = [
    {
      icon: "/icons/analysis.gif", 
      title: "Data Analysis",
      description: "I analyze diverse data sets to find patterns, spot outliers, and generate actionable insights. I enjoy asking the \"why\" behind the numbers and visualizing answers that make sense",
    },
    {
      icon: "/icons/management.gif",
      title: "Workflow Automation",
      description: "I streamline repetitive tasks and reporting processes using tools like Excel, Power Query, SQL, and scripts. I love building systems that save time and reduce human error — so teams can focus on what really matters.",
    },
    {
      icon: "/icons/visualize.gif",
      title: "Data Visualization",
      description: "I create dashboards and reports that make data easier to understand and act on. From executive summaries to interactive charts, I aim to tell stories that are clear, focused, and actually helpful",
    },
  ];
  
  return (
    <>
      <section id="about" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          {/*First Section - About & Experetise */}
          <h2 className="text-3xl font-extrabold text-pink-500 mb-4">About</h2>
          <div className="w-24 h-1 bg-pink-500 mb-6"></div>

          <p className="text-gray-800 text-sm md:text-base font-semibold leading-relaxed mb-16 max-full pb-10">
          I am a data-driven problem solver who loves finding meaning in numbers. 
          With 4+ years experience, I help make complex data easier to understand and use. 
          I’ve worked across industries, from finance to higher education, building dashboards, streamlining reporting, and uncovering patterns that actually matter.
          I’m curious, detail-oriented, and always thinking about how data can tell a better story.
          Right now, I’m looking for a role where I can build useful tools, solve real problems, and grow through meaningful work.
          </p>

          <h3 className="text-center text-2xl font-bold text-pink-500 mb-12">My Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-16">
            {expertiseData.map((item, index) => (
              <div key={index} className="flex flex-col items-center rounded-xl shadow-md p-5">
                <img src={item.icon} alt={item.title} className="w-24 h-24 mb-4 object-contain" />
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-600 max-w-xs">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <ScrollDownArrow to="experience" />
          </div>

        </div>

    </section>



  </>
  );
}
export default About;
