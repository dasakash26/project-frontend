import React, { useState } from "react";

const Settings = () => {
  const [settings, setSettings] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Settings updated:", settings);
  };

  return (
    <div className="mt-16 p-5 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl text-gray-800">Settings</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={settings}
          onChange={(e) => setSettings(e.target.value)}
          className="mt-2 p-2 border border-gray-300 rounded"
          placeholder="Enter settings details"
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

export default Settings;