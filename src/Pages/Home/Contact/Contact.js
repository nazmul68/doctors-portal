import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-bg mt-20 py-10">
      <div className=" w-5/6 md:w-1/3 mx-auto">
        <div className="text-center">
          <h3 className="text-primary font-bold">Contact Us</h3>
          <h2 className="text-3xl text-white font-semibold">
            Stay connected with us
          </h2>
        </div>
        <form>
          <div className="form-control py-2">
            <input
              type="email"
              placeholder="email address"
              className="input "
            />
          </div>
          <div className="form-control py-2">
            <input type="text" placeholder="subject" className="input " />
          </div>
          <div className="form-control py-2">
            <input
              type="text"
              placeholder="your message"
              className="input py-10"
            />
          </div>
          <figure className="text-center">
            <PrimaryButton>Submit</PrimaryButton>
          </figure>
        </form>
      </div>
    </section>
  );
};

export default Contact;
