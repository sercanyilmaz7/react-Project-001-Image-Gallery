import React from "react";
import Picture from "../componenets/Picture";
import "./Homepage.css";

const Homepage = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1 className="title">Albums</h1>
      <div className="card_container">
        {data.map((item, index) => {
          return <Picture item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Homepage;
