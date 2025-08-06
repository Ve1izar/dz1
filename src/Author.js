import React from "react";
import "./Author.css";

function Author({ name, bio, photo }) {
  return (
    <div className="author">
      <img className="author-photo" src={photo} alt={name} />
      <div className="author-info">
        <h3>{name}</h3>
        <p>{bio}</p>
      </div>
    </div>
  );
}

export default Author;
