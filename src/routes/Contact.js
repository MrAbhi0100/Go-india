import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ContactImg from "../assets/2.jpg"
import Footer from "../components/Footer"

function Contact(){
    return(
        <>
        <Navbar/>
        <Hero 
        cName="hero-contact"
        heroImage={ContactImg}
        title="Contact"
        // text=" Choose Your Favourite Destination."
        // buttonText="Travel Plan"
        // url="/"
        // btnClass="show"
        
        />
        <Footer/>
        </>
    )

}
export default Contact