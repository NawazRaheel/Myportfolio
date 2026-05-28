function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-8 py-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-12">
          Contact Me
        </h2>

        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-gray-900 p-4 rounded-xl outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="bg-gray-900 p-4 rounded-xl outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows="6"
            className="bg-gray-900 p-4 rounded-xl outline-none"
          ></textarea>

          <button
            className="bg-white text-black py-4 rounded-xl font-bold hover:bg-gray-300 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;