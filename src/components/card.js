import React, { Component } from "react";

class Card extends Component {
  render() {
    const data = this.props.data;
    return (
      <div>
        <div className="card">
          <div className="image">
            {data.title ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${data.image}`}
                alt={data.title}
              />
            ) : (
              <div></div>
            )}
          </div>
          <div className="details">
            <div className="title">
              <h1>{data.title}</h1>
            </div>
            <div className="tag">
              <h2>{data.tag}</h2>
            </div>
            <div className="summary">
              <p>{data.summary}</p>
            </div>

            <div className="details-2">
              <div className="genre">
                <p>Genre</p>
                {data.genre.map((genre, index) => (
                  <span key={index}>{(index ? ", " : "") + genre.name}</span>
                ))}
              </div>
              <div className="rating">
                <p>rating:</p>
                <span> {data.rating}</span>
              </div>
              <div className="language">
                <p>Language:</p>
                <span>{data.language ? data.language : "NA"}</span>
              </div>
              <div className="release">
                <p>Release Date:</p>
                <span>{data.release_date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
