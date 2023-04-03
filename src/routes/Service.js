import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ServiceImg from "../assets/1.jpg"

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
        </>
    )

}
export default Service