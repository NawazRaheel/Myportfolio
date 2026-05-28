function Skills() {
  const skills = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    ".NET Web API",
    "SQL",
    "Git",
    "GitHub",
    "HTML",
    "CSS",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white px-8 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl text-center text-lg font-semibold hover:bg-gray-800 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;