export default function ServiceCards() {
  return (
    <section className="service-cards bg-gray-100 py-20">
      <h2 className="text-3xl font-semibold text-center">
        Our Trusted Services
      </h2>
      <div className="services-list mt-12 flex justify-center space-x-8">
        <div className="service-card w-1/4 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Plumbing</h3>
          <p className="mt-4 text-lg">
            Honest plumbing solutions with guaranteed quality and no hidden
            charges. We treat your home like our own.
          </p>
        </div>
        <div className="service-card w-1/4 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Electrical</h3>
          <p className="mt-4 text-lg">
            Safe, reliable electrical services. Our experts ensure your home’s
            wiring is secure and compliant with safety standards.
          </p>
        </div>
        <div className="service-card w-1/4 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Carpentry</h3>
          <p className="mt-4 text-lg">
            From custom furniture to home improvements, our carpenters work with
            you to bring your vision to life, with craftsmanship you can trust.
          </p>
        </div>
        {/* Add more service cards as needed */}
      </div>
    </section>
  );
}
