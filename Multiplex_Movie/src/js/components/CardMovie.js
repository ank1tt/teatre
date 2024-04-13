import React from "react";

class CardMovie extends React.Component {
  constructor(props) {
    super(props);
    this.srcImg = props.movie.srcImg;
    this.movieTitle = props.movie.title;
    this.description = props.movie.description;
    this.infoUpdate = props.movie.info;
  }

  render() {
    return (
      <div className="card card-movie mb-4">
        <img src={this.srcImg} className="card-img-top" alt="dune movie" />
        <div className="card-body text-bg-dark bg-dark">
          <h2 className="text-center mb-3">{this.movieTitle}</h2>
          <p className="card-text mb-3">{this.description}</p>
          <small>{this.infoUpdate}</small>
        </div>
      </div>
    );
  }
}

export default CardMovie;
