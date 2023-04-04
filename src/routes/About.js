import Navbar from "../components/Navbar"
import "./About.css";
import Hero from "../components/Hero"
import AboutImg from "../assets/night.jpg"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About(){
    return(
        <>
        <Navbar/>
        <Hero 
        cName="hero-about"
        heroImage={AboutImg}
        title="About" 
        />
        <AboutUs/>
        <Footer/>

        </>
    )

}
export default About