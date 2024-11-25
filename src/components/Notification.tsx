// import React from 'react'
import { Bell } from "lucide-react";
import { useState } from "react";

function Notification() {
  const [showNotification, setShowNotification] = useState(0);
  const handleClick = () => {
    console.log("Notification Clicked");
    setShowNotification(showNotification + 1);
  };
  return (
    <>
      <div className="flex items-center space-x-2" onClick={handleClick}>
        <Bell className="h-6 text-white" />
        <div className="border-2 border-white text-white px-2 py-1 rounded-full">
          {`${showNotification}`}
        </div>
      </div>
    </>
  );
}

export default Notification;
