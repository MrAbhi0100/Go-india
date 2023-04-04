import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ContactImg from "../assets/2.jpg"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"

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
        <ContactForm/>
        <Footer/>
        </>
    )

}
export default Contact