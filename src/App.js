import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Restaurant from "./Restaurant.js";
import TouristInfoCards from "./TouristInfoCards.js";
import Footer from "./Footer.js";
import Heading from "./Heading.js";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <Restaurant />
      <TouristInfoCards />
      <Footer />
    </div>
  );
};

export default App;
