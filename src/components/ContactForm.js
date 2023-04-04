import "./ContactForm.css";

function ContactForm(){
    return(
        <div className="form-container">
            <h1>Send a Message to us!</h1>
            <form action="">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <textarea name="" id="" placeholder="Message"></textarea>
                <button>Send Message</button>
            </form>


        </div>

    )
}

export default ContactForm