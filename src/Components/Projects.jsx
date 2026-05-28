import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
 const projects = [
  {
    title: "Portfolio Website",
    description: "Modern React portfolio with animations and responsive design.",
    github: "https://github.com/yourname/portfolio",
    live: "https://yourportfolio.com",
  },
  {
    title: "E-Commerce App",
    description: "Full-stack shopping app with cart and checkout system.",
    github: "https://github.com/yourname/ecommerce",
    live: "https://demo.com",
  },
  {
    title: "Task Manager",
    description: "Productivity app to manage daily tasks efficiently.",
    github: "https://github.com/yourname/taskmanager",
    live: "https://demo.com",
  },
];

 return (
  <section
    id="projects"
    className="min-h-screen bg-gray-950 text-white px-8 py-20"
  >
    <div className="max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg"
          >
            {/* Image Placeholder */}
            <div className="h-40 bg-gradient-to-r from-purple-500 to-pink-500"></div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <div className="flex gap-4">
               <div className="flex gap-4">
  <a
    href={project.github}
    target="_blank"
    className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
  >
    <FaGithub /> GitHub
  </a>

  <a
    href={project.live}
    target="_blank"
    className="flex items-center gap-2 border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
  >
    <FaExternalLinkAlt /> Live
  </a>
</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
}

export default Projects;