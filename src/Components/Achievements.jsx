import senior from "../assets/senior.jpeg";
import bestperormer from "../assets/bestperormer.jpeg";

function Achievements() {
  const achievements = [
    {
      title: "Promotion Recognition",
      description:
        "Promoted to Senior 'Technical support Engineer;. Grateful for the trust and support of the team. Looking forward to tackling new challenges and growing with this opportunity.",
      image: senior,
    },
    {
      title: "Best Performer of the Year",
      description:
        "Awarded for 'OutStanding Performer' certificate in 2025. Grateful for the recognition and appreciation of my hard work.Thanks to my amazing team!",
      image: bestperormer,
    },
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen bg-black text-white px-8 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">
          Achievements & Awards
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;