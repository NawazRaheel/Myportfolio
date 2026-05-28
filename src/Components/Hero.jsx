import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-black text-white flex flex-col justify-center items-center text-center px-6"
    >
      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-bold mb-4"
      >
        Muhammad Nawaz
      </motion.h1>

      {/* Role */}
      <p className="text-gray-400 text-lg md:text-2xl mb-4">
        <Typewriter
          words={[
             "Software Engineer",
            "Senior Technical Support Engineer",
            "SQL & API Troubleshooting Expert",
            "Team Lead Aspirant",
            "Cloud & Support Specialist"
          ]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1200}
        />
      </p>

      {/* Contact Quick Info */}
      <p className="text-gray-500 text-sm md:text-base mb-8">
        📧 nawazraheel777@gmail.com | 📞 +92317055544 | 📍 Islamabad,Pakistan
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <a
          href="#about"
          className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-300 transition"
        >
          About Me
        </a>

        <a
          href="#projects"
          className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;