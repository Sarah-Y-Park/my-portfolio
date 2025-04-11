import { motion } from 'framer-motion';
import { FaDownload, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Resume() {
    const navigate = useNavigate();
  
    return (
    <section className="bg-pink-50 py-20 px-6 min-h-screen">
        <div className="max-w-5xl mx-auto">
            <div className="px-6 py-10">
                {/* Back Button */}
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center text-pink-500 hover:text-pink-600 font-semibold mb-6"
                >
                    <FaArrowLeft className="mr-2" />
                    Back to Home
                </button>
            </div>
            {/* Title */}
            <h1 className="text-4xl font-extrabold text-pink-500 mb-4 text-center">Resume</h1>
            <p className="text-center text-gray-700 mb-8">View my experience and qualifications</p>

            {/* Download Button */}
            <div className="flex justify-center mb-12">
            <a
                href="/YoojinPark_Resume.pdf"
                download
                className="flex items-center gap-2 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
            >
                <FaDownload /> Download PDF
            </a>
            </div>

            {/* Resume Content */}
            <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md text-gray-800 space-y-6"
            >
            <div>
                <h2 className="text-xl font-bold text-pink-500 mb-2">Summary</h2>
                <p>A results-driven data analyst with 4+ years of experience across finance, IT, construction, and higher education. Skilled in analyzing both quantitative and qualitative data to generate actionable insights through visualization. Strong in solving problems with a data-driven approach and clearly communicating findings to diverse stakeholders.</p>
            </div>

            <div>
                <h2 className="text-xl font-bold text-pink-500 mb-2">Skills</h2>
                <ul className="list-disc list-inside">
                <li>Data Analysis & Visualization: SQL, Power BI, Tableau, Power Query, Google Analytics</li>
                <li>ETL & Automation: Power Query, Report Automation, Workflow Optimization</li>
                <li>Tools: MS Office, Outlook, SharePoint, Canva, Qualtrics</li>
                <li>Programming: Java, JavaScript, HTML, CSS, Python, R</li>
                <li>Documentation, Training, Stakeholder Communication</li>
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-bold text-pink-500 mb-2">Education</h2>
                <p><strong>Software Development Diploma</strong>, SAIT, Calgary, AB – 2022</p>
                <p><strong>Bachelor of Arts & BBA</strong>, Kyung Hee University, Korea – 2015</p>
            </div>

            <div>
                <h2 className="text-xl font-bold text-pink-500 mb-2">Experience</h2>
                <ul className="space-y-4">
                <li>
                    <strong>Data Analyst Assistant</strong> – UCalgary Career Centre (Jan 2025 – Mar 2025)
                    <ul className="list-disc list-inside ml-4 text-sm text-gray-600">
                    <li>Automated ETL pipelines for 15+ surveys/month</li>
                    <li>Built Power BI dashboards for 30+ stakeholders</li>
                    <li>Analyzed 8,000+ responses to improve program outcomes</li>
                    </ul>
                </li>
                <li>
                    <strong>Data Analyst</strong> – Samwoo A System (2019 – 2020)
                    <ul className="list-disc list-inside ml-4 text-sm text-gray-600">
                    <li>Improved reporting with Power BI</li>
                    <li>Cut costs by 15% through data insights</li>
                    </ul>
                </li>
                <li>
                    <strong>Data Analyst</strong> – Boozaapp Company (2018 – 2019)
                    <ul className="list-disc list-inside ml-4 text-sm text-gray-600">
                    <li>Built BI system for product & marketing decisions</li>
                    <li>Analyzed app usage & increased retention</li>
                    </ul>
                </li>
                <li>
                    <strong>Data Analyst</strong> – Andbeyond Capital (2016 – 2018)
                    <ul className="list-disc list-inside ml-4 text-sm text-gray-600">
                    <li>Created investment dashboards & SQL databases</li>
                    <li>Automated reports, saving 90% of reporting time</li>
                    </ul>
                </li>
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-bold text-pink-500 mb-2">Certifications</h2>
                <ul className="list-disc list-inside">
                <li>CFA Level 2 – 2019</li>
                <li>Google Data Analytics Certificate – 2024</li>
                <li>Career Service for Foreign Professionals – CIWA, 2025</li>
                </ul>
            </div>
            </motion.div>
        </div>
        
    </section>
  );
}

export default Resume;
