import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-black text-white flex flex-col justify-center items-center text-center px-6"
    >
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-gray-400 mb-4 text-lg"
      >
        Welcome to my portfolio
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-6"
      >
        Hi, I'm Your Name
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-gray-400 text-lg md:text-2xl max-w-2xl mb-8"
      >
     <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mb-8">
  I am a{" "}
  <span className="text-white font-semibold">
    <Typewriter
      words={[
        "Frontend Developer",
        "React Developer",
        "Full Stack Developer",
        ".NET Developer"
      ]}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1200}
    />
  </span>
</p>
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="flex gap-4"
      >
        <button className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-300 transition">
          View Projects
        </button>

        <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
          Contact Me
        </button>
      </motion.div>
    </section>
  );
}

export default Hero;