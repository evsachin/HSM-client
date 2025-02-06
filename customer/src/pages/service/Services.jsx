import { useNavigate } from "react-router-dom";
import electrician from "../../assets/electrician.jpg";
import plumber from "../../assets/plumber.png";

const servicesData = [
  {
    serviceName: "Electrician",
    image: electrician,
    path: "/servicemen/electrician",
  },
  {
    serviceName: "Plumber",
    image: plumber,
    path: "/servicemen/plumber",
  },
  {
    serviceName: "Carpenter",
    image: electrician,
    path: "/servicemen/carpenter",
  },
  {
    serviceName: "Painter",
    image: electrician,
    path: "/servicemen/painter",
  },
  {
    serviceName: "Cleaner",
    image: electrician,
    path: "/servicemen/cleaner",
  },
  {
    serviceName: "Gardener",
    image: electrician,
    path: "/servicemen/gardener",
  },
  {
    serviceName: "Appliance Repair",
    image: electrician,
    path: "/servicemen/appliance-repair",
  },
  {
    serviceName: "Pest Control",
    image: electrician,
    path: "/servicemen/pest-control",
  },
  {
    serviceName: "HVAC Technician",
    image: electrician,
    path: "/servicemen/hvac-technician",
  },
  {
    serviceName: "Locksmith",
    image: electrician,
    path: "/servicemen/locksmith",
  },
];

export default function Service() {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-gray-300 py-10 px-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-red-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 p-5 border border-gray-200 cursor-pointer"
            onClick={() => handleCardClick(service.path)}
          >
            <img
              src={service.image}
              alt={service.serviceName}
              className="w-full h-40 object-fill rounded-xl"
            />
            <p className="mt-4 text-lg font-semibold text-gray-900">
              {service.serviceName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
