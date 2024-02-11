import "./Contactdata.scss";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function ContactForm() {
  let err = "";
  const [msg, setMessage] = useState("");
  const [colors, setColor] = useState("");
  const [visibility, setvisibility] = useState("visible");
  const [name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [message, semessage] = useState("");
  const [Address, setAddress] = useState("");

  const resetForm = () => {
    setName("");
    setPhone("");
    setSubject("");
    setEmail("");
    semessage("");
    setAddress("");
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setvisibility("hidden");
    const formData = {
      name: e.target.user_name.value,
      email: e.target.user_email.value,
      phone: e.target.user_phone.value,
      user_address: e.target.user_address.value,
      user_subject: e.target.user_subject.value,
      message: e.target.message.value,
    };

    //Validate the form data
    if (formData.name.trim() === "") {
      err = "Please enter your name";
    } else if (!validateEmail(formData.email)) {
      err = "Please enter a valid email address";
    } else if (formData.phone.trim() === "") {
      err = "Please enter your Phone Number";
    } else if (formData.user_address.trim() === "") {
      err = "Please enter your Address";
    } else if (formData.user_subject.trim() === "") {
      err = "Please enter your Subject";
    } else if (formData.message.trim() === "") {
      err = "Please enter your message";
    }

    if (err === "") {
      if (form.current) {
        try {
          emailjs
            .sendForm(
              "service_0me9iwe",
              "template_0quvy89",
              form.current,
              "mPsq8IDI9mxFMS_Uu"
            )
            .then(
              (result) => {
                setMessage("Your message has sent");
                setColor("green");
                resetForm();
                setvisibility("visible");
                console.log(result);
              },
              (error) => {
                console.log(e.target.user_name,error);
                setMessage("Your message has not sent");
                setvisibility("visible");
                setColor("red");
              }
            );
        } catch (error) {
          console.log(error);
          setMessage("An error has occurred. Please try again later.");
          setColor("red");
        }
      } else {
        // Handle the case where form is undefined
        console.error(
          "Form reference is undefined. Please initialize it properly before sending the email."
        );
      }
    } else {
      setMessage(err);
      setColor("red");
      setvisibility("visible");
    }
  };
  const deleteError = () => {
    setMessage("");
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return (
    <>
      <div className="" data-aos="fade-up" id="contact">
        <form ref={form} onSubmit={sendEmail}>
          <div className="formheader">
            <span>
              <h5 style={{ textAlign: "center" }}>Contact Us</h5>
              <h3 >
                <span style={{ color: "#2F91E0",fontSize:30  }} >— </span > Ask us anything   <span style={{ color: "#2F91E0",fontSize:30  }} >— </span >
              </h3>
            </span>
          </div>
          <div className="formcomponent">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                name="user_name"
                value={name}
                onFocus={deleteError}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
              <input
                type="email"
                placeholder="Your Email"
                name="user_email"
                value={email}
                onFocus={deleteError}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Your Phone"
                name="user_phone"
                value={Phone}
                onFocus={deleteError}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Your Address"
                name="user_address"
                value={Address}
                onFocus={deleteError}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                name="user_subject"
                value={Subject}
                onFocus={deleteError}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
              <textarea
                name="message"
                placeholder="Your messsage"
                value={message}
                onFocus={deleteError}
                onChange={(e) => {
                  semessage(e.target.value);
                }}
              ></textarea>
            </div>
            {}
            <p className="errormsg" style={{ color: colors }}>
              {msg}
            </p>

            <button
              type="submit"
              className="btn"
              style={{ visibility: visibility.toString() }}
            >
              {" "}
              Send message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default ContactForm;
