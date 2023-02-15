import React from "react";
import coverImage from "../assets/frontcover.jpg";

const Home = () => {
  return (
    <div className="container">
      <img className="coverImg" src={coverImage}></img>
    </div>
  );
};

export default Home;
