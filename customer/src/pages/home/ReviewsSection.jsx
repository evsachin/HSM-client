export default function Reviews() {
  return (
    <section className="mx-24 reviews bg-white py-20 text-center">
      <h2 className="text-3xl font-semibold">What Our Clients Say</h2>
      <div className="reviews-list mt-12 flex justify-center space-x-8">
        <div className="review w-1/3 bg-green-300 p-6 rounded-lg shadow-lg">
          <p className="text-lg italic">
            "The service was fast, professional, and exactly what I needed. The
            team was honest and upfront about pricing. Highly recommend!"
          </p>
          <span className="block mt-4 font-medium">- Jane Doe</span>
        </div>
        <div className="review w-1/3 bg-orange-200 p-6 rounded-lg shadow-lg">
          <p className="text-lg italic">
            "I’ve used other services before, but this one was by far the best.
            The technician was respectful, honest, and very skilled."
          </p>
          <span className="block mt-4 font-medium">- John Smith</span>
        </div>
      </div>
    </section>
  );
}