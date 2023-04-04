import "./Trip.css";
import React from "react";
import tripimg1 from "../assets/proj-img3.jpg";
import tripimg2 from "../assets/proj-img4.jpg";
import tripimg3 from "../assets/proj-img7.jpg";

export default function TripData(props) {
  return (
    <>
      <div className="t-card">
        <div className="t-image">
          <img src={props.image} alt="image" />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
      </div>
    </>
  );
}
