import './contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {toast} from 'react-toastify'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_YOUR_PUBLIC_KEY)
      .then((result) => {
        toast.success("Thank you and you'll hear back from me in 24 hours")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })

      e.target.reset()
    }

  return(
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message"  rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>

    </section>
  )
}
export default Contact