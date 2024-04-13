import React, { useState } from "react";
import superherosData from "../../data/superheros";
import trendingData from "../../data/trendings";

const NavigationBar = () => {
  let rootLink = "#";
  let trendingLink = "#trending";
  let superheroLink = "#superhero";
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // const handleSearch = (event) => {
  //   event.preventDefault();
  //   const results = superherosData.filter((hero) =>
  //     hero.title.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setSearchResults(results);
  // };

  const handleSearch = (event) => {
    event.preventDefault();
    const results = [...superherosData, ...trendingData].filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container">
          <a href={rootLink} className="navbar-brand text-hero-clip">
            Multiplex Movie
          </a>
          <a
            href="/#"
            className="navbar-toggler"
            type="a"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </a>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a
                  href={trendingLink}
                  className="nav-link active text-white"
                  aria-current="page"
                >
                  Trending
                </a>
              </li>
              <li className="nav-item">
                <a href={superheroLink} className="nav-link text-white">
                  Superhero
                </a>
              </li>
              <li className="nav-item">
                <form className="d-flex" onSubmit={handleSearch}>
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {searchResults.map((hero, index) => (
        <div key={index}>
          <h2>{hero.title}</h2>
          <img src={hero.srcImg} alt={hero.title} />
          <p>{hero.description}</p>
        </div>
      ))}
    </>
  );
};

export default NavigationBar;
