import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="cards">
      <div className="card">
        <img
          src="https://wallpapercave.com/wp/wp2492462.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h1>Glasgow</h1>
          <p>
            Located on the River Clyde, Glasgow has been transformed from an
            industrial city to Scotland's cultural center, with its excellent
            museums, art galleries, concert venues, and festivals. Its Gaelic
            name-meaning "lovely green place"-is apt, given its 70 parks and
            open spaces. Music lovers of all kinds will find plenty of things to
            do in Glasgow, known as Scotland's music capital, with venues that
            include the Theatre Royal (home of the Scottish Opera) and the
            Concert Hall (home of the Royal Scottish Orchestra).
          </p>
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            More information
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://p4.wallpaperbetter.com/wallpaper/446/372/916/the-city-manchester-salford-quays-hd-wallpaper-preview.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h1>Manchester</h1>
          <p>
            Manchester city centre is jam-packed with unique and eclectic
            restaurants, bars, shops, museums, galleries, hotels and places to
            stay whilst the surrounding Greater Manchester boroughs offer a
            patch-work of visitor experiences including quaint market towns,
            traditional pubs and beautiful green spaces and waterways to be
            explored on foot or bike. The city region is easily navigated, with
            great transport links both in and around Greater Manchester.
          </p>
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            More information
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://www.moneysavingexpert.com/content/dam/mse/editorial-image-library/guide-images/hero-images/hero-travel-cheap-london.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h1>London</h1>
          <p>
            It's little wonder London, England is one of the world's top tourist
            destinations, attracting upward of 20 million visitors each year
            from around the world. Britain's capital city is a vibrant arts and
            entertainment center (its theaters are always busy), and 50 years
            after The Beatles, the country's music scene still rocks.
          </p>
          <a href="https://www.visitlondon.com/" className="btn btn-primary">
            More information
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
