import "./About.css";
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import AboutImg from "../assets/night.jpg"

function About(){
    return(
        <>
        <Navbar/>
        <Hero 
        cName="hero-about"
        heroImage={AboutImg}
        title="About" 
        />
        </>
    )

}
export default About