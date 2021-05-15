import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const search = searchVal => {
  console.info("TO DO!", searchVal);
};

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {console.log(bookings)}
        <SearchResults
          onclick={() => {
            console.log("has tocado la tabla");
          }}
          results={bookings}
        />
      </div>
    </div>
  );
};

export default Bookings;
