import React, { useState } from "react";
import HeaderComponent from "../Components/Header/HeaderComponent";
import DetailsContainer from "../Container/Details/DetailsContainer";

const ParentContainer = () => {
  const [published, setPublished] = useState(false);
  const [publishedMovieId, setPublishedMovieId] = useState(null);

  return (
    <>
      <HeaderComponent setPublished={setPublished} />
      <DetailsContainer published={published} />
      {/* publishedMovieId={publishedMovieId} */}
    </>
  );
};

export default ParentContainer;
