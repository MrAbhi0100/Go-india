import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ServiceImg from "../assets/1.jpg"
import Footer from "../components/Footer"
import Trip from "../components/Trip"

function Service(){
    return(
        <>
       <Navbar/>
        <Hero 
        cName="hero-service"
        heroImage={ServiceImg}
        title="Service"
        // text=" Choose Your Favourite Destination."
        // buttonText="Travel Plan"
        // url="/"
        // btnClass="show"
        
        />
        <Trip/>
        <Footer/>
        </>
    )

}
export default Service