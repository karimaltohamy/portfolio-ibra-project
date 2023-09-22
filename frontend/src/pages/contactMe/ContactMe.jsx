import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contactMe.scss";

const ContactMe = () => {
  const form = useRef();
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      form.current[0].value.length > 0 &&
      form.current[1].value.length > 0 &&
      form.current[2].value.length > 0
    ) {
      emailjs
        .sendForm(
          "service_liwvxhi",
          "template_qn6ec4d",
          form.current,
          "ZZB_w0qsqFuxA25Lb"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("send successfull");
          },
          (error) => {
            console.log(error.text);
            setError(error);
          }
        );
    } else {
      setError("Invalid Form, inputs can not be empty");
    }
  };

  return (
    <div className="contact_me mt-[160px]">
      <div className="container m-auto">
        <div className="head">
          <h1 className="title">
            <span>Let's create</span> <br /> something great <br /> together
          </h1>
          <p className="desc">Contact me and let's bring your vision to life</p>
        </div>
        <div className="form_contact">
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 lg:gap-5">
              <div className="input_item">
                <input
                  type="text"
                  placeholder="What's Your Name"
                  name="user_name"
                />
              </div>
              <div className="input_item">
                <input
                  type="email"
                  placeholder="What's Your Email"
                  name="user_email"
                />
              </div>
            </div>
            <div className="input_item">
              <textarea
                placeholder="Tell Me About Your Project"
                name="message"
              ></textarea>
            </div>
           {error.length > 0 &&  <div className="error text-red-500 text-center mb-2 text-[14px]">{error}</div>}
            <button className="btn_submit" type="submit" value="Send">
              {" "}
              Send Message{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
