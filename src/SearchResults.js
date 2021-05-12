import React, { useState } from "react";

// import fakeBookings from "./data/fakeBookings.json";

function diferenceInDate(entrada, salida) {
  let entradaDate = new Date(entrada);
  let salidaDate = new Date(salida);
  let diferencia = Math.abs(entradaDate - salidaDate) / (1000 * 60 * 60 * 24);
  return diferencia;
}

const SearchResults = ({ results }) => {
  return (
    <table>
      <thead className="table">
        <th scope="col">id</th>
        <th scope="col">title</th>
        <th scope="col">first name</th>
        <th scope="col">surname</th>
        <th scope="col">email</th>
        <th scope="col">room id</th>
        <th scope="col">check in date</th>
        <th scope="col">check out date</th>
      </thead>
      <tbody>
        {results.map(i => (
          <>
            <tr>
              {Object.values(i).map(j => (
                <td>{j}</td>
              ))}
              <td>{diferenceInDate(i.checkInDate, i.checkOutDate)}</td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};
export default SearchResults;
