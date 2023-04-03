import React from "react";
import "./Destination.css";
import kashiimg1 from "../assets/proj-img6.webp";
import kashiimg2 from "../assets/proj-img5.jpg";

function Destination() {
  return (
    <div className="Destination">
      <div className="Dest-text">
        <h1>Popular Destination</h1>
        <p>Tour gives you the oppertunity to see a lot, within a time frame</p>
      </div>

      <div className="first-des">
        <div className="des-text">
          <h2>Varanshi</h2>
          <p>
            The land of Varanasi (Kashi) has been the ultimate pilgrimage spot{" "}
            <br />
            for Hindus for ages. Hindus believe that one who is graced to die on
            the
            <br />
            land of Varanasi would attain salvation and freedom from the cycle
            of <br />
            birth and re-birth. Abode of Lord Shiva and Parvati, the origins of{" "}
            <br />
            Varanasi are yet unknown. Ganges in Varanasi is believed to have the{" "}
            <br />
            power to wash away the sins of mortals. Hindus believe that one who
            is
            <br />
            graced to die on the land of Varanasi would attain salvation and
            freedom
            <br />
            from the cycle of birth and re-birth.
          </p>
        </div>
        <div className="image">
          <img src={kashiimg1} alt="img" />
          <img src={kashiimg2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Destination;
