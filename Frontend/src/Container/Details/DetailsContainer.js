import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import DarkVariantExample from "../../Components/Carousel/Carousel";
import { img_300, img_not_available } from "../../Config";
import "./button.css";
import "./details.css";

const MovieDetails = () => {
  const params = useParams();
  const [content, setContent] = useState();
  const [video, setVideo] = useState();
  const [credits, setCredits] = useState();
  const [isPublished, setIsPublished] = useState(false);
  const [movieId, setMovieId] = useState("");
  const [movieName, setMovieName] = useState("");
  const [publishedMovieId, setPublishedMovieId] = useState(null);

  const titleName =
    content && content.name && content.name !== ""
      ? content.name
      : content && content.title && content.title !== ""
      ? content.title
      : "";

  console.log("params", params);
  const id = params.movieid || "";
  const _media_type =
    params && params.mediatype && params.mediatype !== ""
      ? params.mediatype.toLowerCase()
      : "";
  const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${_media_type}/${id}?api_key=${API_KEY}&language=en-US`
      );
      setContent(data);
      console.log("fetchData details", data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchVideo = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${_media_type}/${id}/videos?api_key=${API_KEY}&language=en-US`
      );
      setVideo(data.results[0]?.key);
      console.log("fetchVideo", data);
    } catch (error) {
      console.error(error);
    }
  };

  const creditsFetch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${_media_type}/${id}/credits?api_key=${API_KEY}&language=en-US`
      );
      setCredits(data.cast);
      console.log("sdata", data);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePublish = () => {
    if (movieId === publishedMovieId) {
      alert(`Movie ${movieName} is already published.`);
    } else {
      setPublishedMovieId(movieId);
      setIsPublished(true);
      alert(`Movie ${movieName} has been published.`);
    }
  };

  // useEffect(() => {
  //   fetchData();
  //   fetchVideo();
  //   creditsFetch();
  // }, []);

  useEffect(() => {
    fetchData();
    fetchVideo();
    creditsFetch();
    // axios
    //   .get(`http://localhost:8080/publish/publishedMovieIds`)
    //   .then((response) => {
    //     if (response.data === id) {
    //       setIsPublished(true);
    //     } else {
    //       setIsPublished(false);
    //     }
    //   })
    //   .catch((error) => console.error("Error:", error));
    axios
      .get(`http://localhost:8080/publish/publishedMovieIds`)
      .then((response) => {
        const publishedMovieIds = response.data;
        console.log("publishedMovieIds", publishedMovieIds);
        if (publishedMovieIds.includes(id) === id) {
          // alert(`Movie ${titleName} is already published.`);
          // alert("Move to the booking page");
          setIsPublished(true);
        } else {
          // alert(`Movie ${titleName} is not yet published.`);
          setIsPublished(false);
        }
      })
      .catch((error) => console.error("Error:", error));
  }, [movieId]);

  const renderDataHtml = () => {
    const ImageURL = content.poster_path
      ? img_300 + content.poster_path
      : img_not_available;
    const tagline = content.tagline || "";
    const vote_average = parseInt(content.vote_average);
    const original_language = content.original_language || "";
    const adult = !content.adult ? "10+" : "18+";
    const origin_country =
      content.origin_country && content.origin_country[0]
        ? content.origin_country[0]
        : content.production_countries &&
          content.production_countries[0] &&
          content.production_countries[0].name
        ? content.production_countries[0].name
        : "";
    const overview = content.overview;
    const first_air_date = content.first_air_date || content.release_date;
    const budget = content.budget || "";
    const genres =
      content.genres && content.genres.length > 0
        ? content.genres.map((item) => <span key={item.id}>{item.name}</span>)
        : "";

    const handlePublish = () => {
      if (isPublished || id === publishedMovieId) {
        alert("Move to the booking page");
      } else {
        alert(`Movie ${titleName} is not yet published.`);
      }
    };

    // const handlePublish = () => {
    //   axios
    //     .get(`http://localhost:8080/publish/publishedMovieIds`)
    //     .then((response) => {
    //       if (response.data.movieId === id) {
    //         alert(`Movie ${titleName} is already published.`);
    //       } else {
    //         alert(`Movie ${titleName} is not yet published.`);
    //       }
    //     })
    //     .catch((error) => console.error("Error:", error));
    // };

    // const handlePublish = () => {
    //   axios
    //     .get(`http://localhost:8080/publish/publishedMovieIds`)
    //     .then((response) => {
    //       const publishedMovieIds = response.data;
    //       if (publishedMovieIds.find(id)) {
    //         // alert(`Movie ${titleName} is already published.`);
    //         alert("Move to the booking page");
    //       } else {
    //         alert(`Movie ${titleName} is not yet published.`);
    //       }
    //     })
    //     .catch((error) => console.error("Error:", error));
    // };

    return (
      <Row>
        <Col className="col-12">
          <h1>
            {titleName}
            {tagline && tagline !== "" ? <small> {tagline}</small> : ""}
          </h1>
        </Col>
        <Col className="col-12 col-xl-6">
          <div className="card card--details">
            <div className="card__cover">
              <img src={ImageURL} alt="myimage" />
            </div>
            <div className="card__content">
              <div className="card__wrap">
                <span className="card__rate"> {vote_average}</span>

                <ul className="card__list">
                  <li>{original_language}</li>
                  <li>{adult}</li>
                </ul>
              </div>
              <ul className="card__meta">
                <li>
                  <span>Genre:</span>
                  <span className="linkTag">{genres}</span>
                </li>
                <li>
                  <span>Type:</span>
                  <span className="linkTag">{_media_type}</span>
                </li>

                <li>
                  <span>Release year:</span>{" "}
                  <span className="linkTag">{first_air_date}</span>
                </li>
                {budget && budget !== "" ? (
                  <li>
                    <span>Budget:- </span>
                    <span className="linkTag"> {budget}</span>
                  </li>
                ) : (
                  ""
                )}

                <li>
                  <span>Country:</span>{" "}
                  <span className="linkTag">{origin_country}</span>{" "}
                </li>
              </ul>
              <div className="description_readmore_wrapper ">{overview}</div>
              <br />
              <br />
              <button className="yourButtonClass" onClick={handlePublish}>
                Book Seat
              </button>
            </div>
          </div>
        </Col>
        <Col className="col-12 col-xl-6">
          <div className="frameSec">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
    );
  };

  // return (
  //   <>
  //     <main className="detailsPage">
  //       <Container>
  //         <div>
  //           <input
  //             type="text"
  //             placeholder="Movie ID"
  //             value={movieId}
  //             onChange={(e) => setMovieId(e.target.value)}
  //           />
  //           <input
  //             type="text"
  //             placeholder="Movie Name"
  //             value={movieName}
  //             onChange={(e) => setMovieName(e.target.value)}
  //           />
  //           <button onClick={handlePublish}>Publish</button>
  //         </div>
  //         {titleName && titleName !== "" ? renderDataHtml() : "Loading..."}
  //       </Container>
  //       <section className="section">
  //         <div className="contentHead">
  //           <Container>
  //             <Row>
  //               <Col className="col-12">
  //                 {credits && credits.length > 0 ? (
  //                   <DarkVariantExample data={credits} />
  //                 ) : (
  //                   "Lading data..."
  //                 )}
  //               </Col>
  //             </Row>
  //           </Container>
  //         </div>
  //       </section>
  //     </main>
  //   </>
  // );
};

export default MovieDetails;
