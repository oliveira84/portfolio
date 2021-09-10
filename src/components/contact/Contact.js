import "./contact.scss"
import emailjs from 'emailjs-com';
import {useState} from "react";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);


  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_5vskdvo', 'template_f5qpi58', e.target, 'user_Ymd1lCnjzFCsQscv1YHpd')
      .then((result) => {
        /*console.log(result.text);*/
        setSent(true);
      }, (error) => {
        /*console.log(error.text);*/
        setError(true);
      });
  }

  return (
    <div className={"container"}>
      <h2>Contact me.</h2>
      <div className={"contact"} id={"contact"}>
        <div className="left">
          <img src="assets/send_email.svg" alt=""/>
        </div>
        <div className="right">
          <div className="wrapper">
            <form className="contact-form" onSubmit={sendEmail}>
              <input type="hidden" name="contact_number"/>
              <label>Name</label>
              <input type="text" name="user_name"/>
              <label>Email</label>
              <input type="email" name="user_email"/>
              <label>Message</label>
              <textarea name="message"/>
              <input className={"button"} type="submit" value="Send"/>
              <span className={"sent " + (sent && "showSent")}>Thanks for your message.</span>
              <span className={"error " + (error && "showError")}>Something went wrong, please contact me through oliveiradaniel@outlook.com.</span>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Contact;