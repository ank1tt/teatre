import React, { useState } from 'react';
import '../styles/PublishMovie.css';
import axios from 'axios';




const PublishMovie = () => {
  const [showDetails, setShowDetails] = useState({
    movieTitle: '',
    img: '',
  });

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setShowDetails({ ...showDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validation

    if(!showDetails.movieTitle.trim() || !showDetails.img.trim()){
      alert('Please fill all the fields.')
      return;
    }

    axios.post('http://localhost:8080/admin/publish-movie', showDetails)
    .then(response => {
      if(response.status === 200){
        alert('Movie Published Successfully');
      }else{
        alert('Failed to publish movie');
      }
    })
    .catch(error => {
      console.error('Failed to Publish Movie :', error);
    });
    console.log(showDetails);
  };

  return (
    <div className="publish-movie-container">
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Movie Title:</label>
        <input
          type="text"
          id="title"
          name="movieTitle"
          value={showDetails.movieTitle}
          onChange={handleFieldChange} // Use handleFieldChange for title
        />
      </div>
      <div>
        <label htmlFor="description">Poster Details</label>
        <textarea
          id="description"
          name="img"
          value={showDetails.img}
          onChange={handleFieldChange} // Use handleFieldChange for description
        />
      </div>
      <button type="submit">Publish Movie</button>
    </form>
    </div>
  );
};

export default PublishMovie;