import React, { useState } from "react";

const Negotiation = () => {
  const [negotiation, setNegotiation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Negotiation started:", negotiation);
  };

  return (
    <div className="mt-16 p-5 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl text-gray-800">Negotiation</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={negotiation}
          onChange={(e) => setNegotiation(e.target.value)}
          className="mt-2 p-2 border border-gray-300 rounded"
          placeholder="Enter negotiation details"
        />
        <button
          type="submit"
          className="mt-2 p-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Negotiation;