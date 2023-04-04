import "./Trip.css";
import TripData from "./TripData";
import tripimg1 from "../assets/proj-img3.jpg";
// import tripimg2 from "../assets/proj-img4.jpg";
import tripimg2 from "../assets/proj-img7.jpg";
import tripimg3 from "../assets/proj-img8.jpg";

export default function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Your can discover unique destinations using Goggle Maps.</p>
      <div className="tripcard">
        <TripData
        image={tripimg1}
        heading="Trip in kashmir"
        text="Picturesque and enchanting, Kashmir is cradled high in the lofty
         green Himalayas and hailed all over the world for its incredible natural beauty. 
         Surrounded by mountain peaks, lush green valleys, glistening lakes, temples and 
         spectacular Mughal-era gardens, it has inspired poets through centuries.
        "
        />
        <TripData
        image={tripimg2}
        heading="Trip in kathmandu"
        text="kathmandu is the city of the Mount Everest, the highest mountain peak in the world,
         and the Birthplace of Gautama Buddha- Lumbini. Mountaineering and other types of adventure 
         tourism and ecotourism are important attractions for visitors..
        "
        />
        <TripData
        image={tripimg3}
        heading="Trip in Kedarnath "
        text="Renowned for the ancient temple dedicated to Lord Shiva, the Kedarnath pilgrimage offers the 
        joy of a devout centre and the sizzles of an idyllic tourist spot. A serene place that is closely 
        associated with the mighty Pandavas, upholds a beautiful legend of its own..
        "
        />
      </div>
    </div>
  );
}
