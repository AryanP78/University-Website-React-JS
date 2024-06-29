import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'





const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };




  return (
    <div className='contact'>
      <div className="contact-col">
      <h3>Send Us a Message  <img src={msg_icon} alt="" /></h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae totam laboriosam mollitia? Doloremque nostrum voluptates exercitationem quaerat accusamus cum odio fuga dolore. Laborum necessitatibus quam quas labore sequi non.
      </p>

      <ul>
        <li>Contact@educity.dev  <img src={mail_icon} alt="" /> </li>
        <li>+1 123-456-7890  <img src={phone_icon} alt="" /> </li>
        <li>77 Karol Bagh, Delhi
        MA 02139, India    <img src={location_icon} alt="" /> </li>
      </ul>
      </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
            <label htmlFor="">Your Name</label>
            <input type="text" name="" id=""  placeholder='Enter your name'/>

            <label htmlFor="">Phone Number</label>
            <input type="tel"  placeholder='Enter your Phone numbers'/>

            <label htmlFor="">Enter Your Message</label>
            <textarea name="message" id=""  rows='10' placeholder='Enter your message'>
            
            </textarea>
            <button type='submit' className =' btn dark-btn'>Submit Now</button>
            </form>
            <span>{result}</span>



        </div>
     
    </div>
  )
}

export default Contact
