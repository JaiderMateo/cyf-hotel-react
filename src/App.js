import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Search from "./Search.js";
import Restaurant from "./Restaurant.js";
import TouristInfoCards from "./TouristInfoCards.js";
import SearchResults from "./SearchResults.js";

const Heading = () => {
  return (
    <>
      <header className="App-header">CYF Hotel</header>
      <img src="https://image.flaticon.com/icons/svg/139/139899.svg" />
    </>
  );
};

const Footer = () => {
  const footerData = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <ul>
      {footerData.map(i => (
        <li>{i}</li>
      ))}
    </ul>
  );
};

const App = () => {
  return (
    <div className="App">
      <Search />
      <Heading />
      <Bookings />
      <Restaurant />
      <TouristInfoCards />
      <Footer />
    </div>
  );
};

export default App;
