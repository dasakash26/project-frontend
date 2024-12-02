import React from "react";

interface offerProps {
  offers: string[];
}

function Offers({ offers }: offerProps) {
  return (
    <div>
      <h1>Offers</h1>
      <p>Here are the latest offers available for you:</p>
      <ul>
        <li>Offer 1: 20% off on all products</li>
        <li>Offer 2: Buy one get one free</li>
        <li>Offer 3: Free shipping on orders over $50</li>
      </ul>
      <div>
        <h2>Offers</h2>
        <ul>{offers}</ul>
      </div>
    </div>
  );
}

export default Offers;
