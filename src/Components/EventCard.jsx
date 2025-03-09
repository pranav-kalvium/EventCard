import React from "react";

const EventCard = () => {

  const event = {
    name: "Tech Conference 2025",
    date: "March 20, 2025",
    location: "Bengaluru, India",
    description: "An exciting tech conference featuring AI, Web3, and more.",
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800">{event.name}</h2>
        <p className="text-gray-600">{event.date} | {event.location}</p>
        <p className="mt-2 text-gray-700">{event.description}</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default EventCard;
