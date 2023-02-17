import React from "react";
import "./Picture.css";

const Picture = ({ item }) => {
  console.log(item);
  const {
    photographer,
    src: { large },
  } = item;
  console.log(large);
  return (
    <div className="card">
      <div className="image_card">
        <img src={large} alt={photographer} className="image" />
      </div>
      <h5 className="name">{photographer}</h5>
    </div>
  );
};

export default Picture;
