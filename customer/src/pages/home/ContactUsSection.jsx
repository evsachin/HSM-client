export default  function ContactUs() {
  return (
    <section className="contact-us bg-white py-20 text-center">
      <h2 className="text-3xl font-semibold">Contact Us</h2>
      <p className="mt-4 text-lg">
        We're here to assist with any home service needs. Reach out, and we’ll
        get back to you promptly.
      </p>
      <form className="mt-6 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          required
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
        ></textarea>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
