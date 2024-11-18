import React, { useState } from "react";

const CreateOffer = () => {
  const [offer, setOffer] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Offer created:", offer);
  };

  return (
    <div className="mt-16 p-5 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl text-gray-800">Create Offer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={offer}
          onChange={(e) => setOffer(e.target.value)}
          className="mt-2 p-2 border border-gray-300 rounded"
          placeholder="Enter offer details"
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

export default CreateOffer;
