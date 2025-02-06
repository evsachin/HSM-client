import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to Home Service Management, your one-stop solution for
          professional and reliable home services. We are committed to
          connecting customers with skilled and experienced servicemen in
          various domains such as electrical work, plumbing, carpentry,
          painting, cleaning, and more.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mt-6">
          Our Mission
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our mission is to provide seamless, trustworthy, and efficient home
          services to households and businesses. We aim to bridge the gap
          between service providers and customers by ensuring quality work and
          timely assistance.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mt-6">
          Why Choose Us?
        </h3>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>Verified and experienced professionals</li>
          <li>Quick and hassle-free booking</li>
          <li>Affordable and transparent pricing</li>
          <li>Customer satisfaction guaranteed</li>
          <li>24/7 support for all your service needs</li>
        </ul>
        <h3 className="text-2xl font-semibold text-gray-800 mt-6">
          Contact Us
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          If you have any queries or need assistance, feel free to reach out to
          us at <span className="font-semibold">support@homeservice.com</span>{" "}
          or call us at
          <span className="font-semibold"> +123 456 7890</span>. We are always
          here to help you!
        </p>
      </div>
    </div>
  );
}
