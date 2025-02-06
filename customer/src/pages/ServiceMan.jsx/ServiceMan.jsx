import { useParams } from "react-router-dom";
import { useState } from "react";
import profile from '../../assets/profile.png'

const servicemenData = {
  electrician: [
    { id: 1, name: "John Doe", experience: "5 years", image: profile, rating: 4.5, services: "Wiring, Repairs", address: "123 Main St", city: "New York" },
    { id: 2, name: "Mike Smith", experience: "8 years", image: profile, rating: 4.7, services: "Installation, Maintenance", address: "456 Elm St", city: "Los Angeles" },
    { id: 1, name: "John Doe", experience: "5 years", image: profile, rating: 4.5, services: "Wiring, Repairs", address: "123 Main St", city: "New York" },
    { id: 2, name: "Mike Smith", experience: "8 years", image: profile, rating: 4.7, services: "Installation, Maintenance", address: "456 Elm St", city: "Los Angeles" },
    { id: 1, name: "John Doe", experience: "5 years", image: profile, rating: 4.5, services: "Wiring, Repairs", address: "123 Main St", city: "New York" },
    { id: 2, name: "Mike Smith", experience: "8 years", image: profile, rating: 4.7, services: "Installation, Maintenance", address: "456 Elm St", city: "Los Angeles" },
  ],
  plumber: [
    { id: 3, name: "Jane Doe", experience: "6 years", image: profile, rating: 4.6, services: "Leak Fixing, Pipe Installation", address: "789 Oak St", city: "Chicago" },
    { id: 4, name: "David Johnson", experience: "10 years", image: profile, rating: 4.8, services: "Sewer Repair, Water Heater Installation", address: "101 Pine St", city: "Houston" },
    { id: 3, name: "Jane Doe", experience: "6 years", image: profile, rating: 4.6, services: "Leak Fixing, Pipe Installation", address: "789 Oak St", city: "Chicago" },
    { id: 4, name: "David Johnson", experience: "10 years", image: profile, rating: 4.8, services: "Sewer Repair, Water Heater Installation", address: "101 Pine St", city: "Houston" },
    { id: 3, name: "Jane Doe", experience: "6 years", image: profile, rating: 4.6, services: "Leak Fixing, Pipe Installation", address: "789 Oak St", city: "Chicago" },
    { id: 4, name: "David Johnson", experience: "10 years", image: profile, rating: 4.8, services: "Sewer Repair, Water Heater Installation", address: "101 Pine St", city: "Houston" },
  ],
};

export default function ServiceMan() {
  const { serviceType } = useParams();
  const servicemen = servicemenData[serviceType] || [];
  const [selectedServiceman, setSelectedServiceman] = useState(null);

  return (
    <div className="bg-gray-100 py-10 px-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        {serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} Servicemen
      </h2>
      <div className="max-w-4xl mx-auto bg-yellow-300 p-6 rounded-lg shadow-md">
        {servicemen.length > 0 ? (
          <ul className="space-y-4">
            {servicemen.map((person) => (
              <li 
                key={person.id} 
                className="flex items-center justify-between p-4 border-b border-gray-900 cursor-pointer hover:bg-gray-200 rounded-lg shadow-xl" 
                onClick={() => setSelectedServiceman(person)}
              >
                <div className="flex items-center gap-4">
                  <img src={person.image} alt={person.name} className="w-16 h-16 rounded-full" />
                  <div>
                    <p className="text-lg font-semibold">{person.name}</p>
                    <p className="text-gray-600">Experience: {person.experience}</p>
                    <p className="text-gray-600">Rating: ⭐ {person.rating}</p>
                  </div>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Book</button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No servicemen available.</p>
        )}
      </div>
      {selectedServiceman && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 flex flex-col items-center">
            <h3 className="text-xl font-bold">{selectedServiceman.name}</h3>
            <img src={selectedServiceman.image} alt={selectedServiceman.name} className="w-24 h-24 rounded-full my-4" />
            <p><strong>Experience:</strong> {selectedServiceman.experience}</p>
            <p><strong>Rating:</strong> ⭐ {selectedServiceman.rating}</p>
            <p><strong>Services:</strong> {selectedServiceman.services}</p>
            <p><strong>Address:</strong> {selectedServiceman.address}, {selectedServiceman.city}</p>
            <button 
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg w-full" 
              onClick={() => setSelectedServiceman(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}