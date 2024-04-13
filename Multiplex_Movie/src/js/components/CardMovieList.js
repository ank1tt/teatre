import React from "react";
import CardMovie from "./CardMovie";

class CardMovieList extends React.Component {
  constructor(props) {
    super(props);
    this.movies = props.movies;
  }

  render() {
    return (
      <div className="row">
        {this.movies.map((movie) => (
          <div className="col-xl-4 col-sm-6">
            <CardMovie key={movie.id} movie={movie} />
          </div>
        ))}
      </div>
    );
  }
}

export default CardMovieList;
