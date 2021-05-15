import React, { useState } from "react";

// import fakeBookings from "./data/fakeBookings.json";

function diferenceInDate(entrada, salida) {
  let entradaDate = new Date(entrada);
  let salidaDate = new Date(salida);
  let diferencia = Math.abs(entradaDate - salidaDate) / (1000 * 60 * 60 * 24);
  return diferencia;
}

const SearchResults = ({ results }) => {
  const [rows, SetRows] = useState(null);
  return (
    <table>
      <thead className="table">
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scope="col">number of days</th>
        </tr>
      </thead>
      <tbody>
        {results.map(i => (
          <>
            <tr
              key={i.id}
              className={`tr${i.id}`}
              onClick={event => {
                rows ? SetRows(null) : SetRows(event.target.innerText);
                console.log(rows);
              }}
              style={{ background: rows == i.id ? "tomato" : null }}
            >
              {Object.values(i).map(j => (
                <th>{j}</th>
              ))}
              <th>{diferenceInDate(i.checkInDate, i.checkOutDate)}</th>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};
export default SearchResults;
