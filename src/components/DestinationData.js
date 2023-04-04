import  { Component } from 'react'
import "./Destination.css";
import kashiimg1 from "../assets/proj-img6.webp";
import kashiimg2 from "../assets/proj-img5.jpg";
import manalimg1 from "../assets/proj-img1.jpg";
import manalimg2 from "../assets/proj-img2.jpg";
class DestinationData extends Component {
    state = {  } 
    render() { 
        return (
            <div className={this.props.className}>
          <div className="des-text">
            <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
          </div>
          <div className="image">
            <img src={this.props.img1} alt="" />
            <img src={this.props.img2} alt="" />
            
          </div>
        </div>

        );
    }
}
 
export default DestinationData ;