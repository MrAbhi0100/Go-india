import React from "react";
import "./Destination.css";
import kashiimg1 from "../assets/proj-img6.webp";
import kashiimg2 from "../assets/proj-img5.jpg";
import manalimg1 from "../assets/proj-img1.jpg";
import manalimg2 from "../assets/proj-img2.jpg";
import delhimg1 from "../assets/proj-img10.jpg";
import delhimg2 from "../assets/proj-img11.jpg";
import DestinationData from "./DestinationData";

function Destination() {
  return (
    <div className="Destination">
       <h1>Popular Destination</h1>
        <p>Tour gives you the oppertunity to see a lot, within a time frame</p>

         
       <DestinationData
       className="first-des"
       
       heading="Varanshi"
       text="The land of Varanasi (Kashi) has been the ultimate pilgrimage spot
       for Hindus for ages. Hindus believe that one who is graced to die on
       the
       land of Varanasi would attain salvation and freedom from the cycle

       birth and re-birth. Abode of Lord Shiva and Parvati, the origins of
       Varanasi are yet unknown. Ganges in Varanasi is believed to have the
       power to wash away the sins of mortals. Hindus believe that one who
       is
       graced to die on the land of Varanasi would attain salvation and
       freedom
       from the cycle of birth and re-birth."
       
       img1={kashiimg1}
       img2={kashiimg2}
       />
         
       <DestinationData
       className="first-des-reverse"
       
       heading="Manali"
       text="Manali is a amidst the mountain slopes, with spell-binding views, 
       charming streams, fairy-tale-like fog surrounding little hidden cottages and a
       lingering scent of pines and freshness. The heavy influx of tourists has led
       to the exploitation of Manali as a tourist destination, though the  surrounding
       areas are still relatively untouched. Nevertheless, this is one place that should 
       definitely be on your bucket list.."
       
       img1={manalimg1}
       img2={manalimg2}
       
       />

         
<DestinationData
       className="first-des"
       
       heading="Delhi"
       text=" 
       'India Gate is not just a gate it is emotion for almost all Indians.
       Memory is the treasure house of the mind wherein the India gate there of are kept and preserved.
       ”The Pride of India!, The Property of Love!2.”Amar Jawan Jyoti and India Gate Remind Us of All the Brave Soldiers.”   
        Bangla Sahib Gurudwara is one of the privileged religious monuments which is not only revered by the Sikh community
         but also by people of different faiths.
       "

       
       img1={delhimg1}
       img2={delhimg2}
       />

         
    </div>
  );
}

export default Destination;
