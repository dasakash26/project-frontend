// import React from 'react'

import { Link } from "react-router-dom";

function Logo() {
  return (
    <>
      <Link to="/dashboard">
        <img src="./img/logoImg.png" alt="Agripact Logo" className="h-12" />
      </Link>
      {/* <span className="text-white text-2xl font-bold">Agripact</span> */}
      <Link to="/" className="text-white text-2xl font-bold">AgriPact</Link>
    </>
  );
}

export default Logo;
