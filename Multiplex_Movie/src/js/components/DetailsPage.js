import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import superherosData from "../../data/superheros";
import trendingData from "../../data/trendings";

const DetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const allData = [...superherosData, ...trendingData];
    const foundMovie = allData.find((item) => item.id === parseInt(id));
    setMovie(foundMovie);
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.srcImg} alt={movie.title} />
      <p>{movie.description}</p>
      <p>{movie.info}</p>
    </div>
  );
};

export default DetailsPage;
