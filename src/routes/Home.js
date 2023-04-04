import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import homeImg from "../assets/12.jpg"
import Destination from "../components/Destination"
import Trip from "../components/Trip"
import Footer from "../components/Footer"

function Home(){ 
    return(
        <>
        <Navbar/>
        <Hero 
        cName="hero"
        heroImage={homeImg}
        title="Your Journey Your Stroy"
        text=" Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />

        <Destination/> 
        <Trip/>
        <Footer/>

        </>
    )

}
export default Home