export default function BusinessFeatures() {
  return (
    <section className=" mx-24 business-features bg-white py-20 text-center">
      <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
      <div className="features-list mt-12 flex justify-center space-x-8">
        <div className="feature w-1/3">
          <h3 className="text-xl font-medium">
            Honest and Transparent Pricing
          </h3>
          <p className="mt-4 text-lg">
            No hidden fees. We provide upfront quotes so you can make informed
            decisions. We believe in honesty every step of the way.
          </p>
        </div>
        <div className="feature w-1/3">
          <h3 className="text-xl font-medium">Certified Experts</h3>
          <p className="mt-4 text-lg">
            Our professionals are thoroughly trained and certified to handle all
            your home service needs with precision and care.
          </p>
        </div>
        <div className="feature w-1/3">
          <h3 className="text-xl font-medium">Reliable and Timely</h3>
          <p className="mt-4 text-lg">
            We understand your time is valuable. Our team is punctual and gets
            the job done efficiently, without compromising quality.
          </p>
        </div>
      </div>
    </section>
  );
}
