import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-950 text-white px-8 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        {/* Title */}
        <h2 className="text-5xl font-bold mb-10">
          About Me
        </h2>

        {/* Profile */}
        <p className="text-gray-400 text-lg leading-8 mb-10">
          Results-driven Software Engineer with 5+ years of experience in Development,troubleshooting,
          application support, and client escalations, including leadership exposure.
          Skilled in SQL, REST APIs, Azure and AWS Clod watch log analysis, and enterprise support systems.
          Strong communicator with a proven track record of SLA-driven issue resolution
          and cross-functional collaboration across global teams.
        </p>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">
              Technical Expertise
            </h3>
            <p className="text-gray-400">
              ASP.NET Core, Angular, React, Nodejs, SQL Server, REST APIs, Log Analysis. 
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">
              Cloud & Tools
            </h3>
            <p className="text-gray-400">
              AWS(CloudWatch), Azure, Jira, Salesforce, Datadog, GitHub
            </p>
          </div>
        </div>

        {/* Experience Summary */}
        <div className="bg-gray-900 p-6 rounded-xl mb-6">
          <h3 className="text-2xl font-bold mb-3">
            Experience Summary
          </h3>

          <ul className="list-disc ml-5 text-gray-400 space-y-2">
            <li>5+ years as a Software engineer and technical support engineer</li>
            <li>Senior escalation handling for production-critical issues</li>
            <li>Worked closely with development, QA, and product teams</li>
            <li>Mentored junior engineers and improved support workflows</li>
            <li>Strong SLA and client communication experience</li>
          </ul>
        </div>

        {/* Education */}
        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-2">
            Education
          </h3>
          <p className="text-gray-400">
            BS Computer Science — University of Poonch Rawalakot (2016–2020)
          </p>
          <p className="text-gray-500 mt-2">
            Final Year Project: IoT Based Smart Car Parking System
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default About;