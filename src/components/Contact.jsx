import React, { useState, useRef } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const submitButtonRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      const mailtoLink = `mailto:saumitraparkour@gmail.com?subject=Message%20from%20${name}&body=${message}`;
      window.open(mailtoLink);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Please fill in all fields before sending the message.");
    }
  };

  const handleCustomLinkClick = () => {
    if (submitButtonRef.current) {
      submitButtonRef.current.click();
    }
  };

  return (
    <section id="connect" className="min-h-screen py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          <span className="text-cyan-600">Connect</span> With Me
        </h3>
        <p className="text-gray-400 mt-3 opacity-0 text-lg">Get in touch</p>
        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-900 md:p-6 p-2 rounded-lg mx-auto">
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col flex-1 gap-5"
          >
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Message"
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              type="submit"
              ref={submitButtonRef}
              className="btn-primary w-fit"
              style={{ display: "none" }}
            >
              Send Message
            </button>
            <a
              className="custom-link"
              href="#connect"
              onClick={handleCustomLinkClick}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Send Message
            </a>
          </form>
          <div className="flex flex-col gap-7">
            <div className="flex gap-4 w-fit items-center">
              <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                <ion-icon name="mail"></ion-icon>
              </div>
              <p className="text-base">saumitrapathak11@gmail.com</p>
            </div>
            <div className="flex gap-4 w-fit items-center">
              <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                <ion-icon name="logo-whatsapp"></ion-icon>
              </div>
              <p className="text-base">+91 86677 03835</p>
            </div>
            <div className="flex gap-4 w-fit items-center">
              <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                <ion-icon name="location"></ion-icon>
              </div>
              <p className="text-base">Bengaluru, Karnataka, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
