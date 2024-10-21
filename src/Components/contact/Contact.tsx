import React, { useState } from "react";
import Title from "./Title";
import ContactLeft from "./ContactLeft";
import GoogleMap from "./GoogleMap";
import { Link } from "react-router-dom";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // Uncomment and complete the function if you need email validation
  /*
  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "") {
      setErrMessage("Username is required");
    } else if (phoneNumber === "") {
      setErrMessage("Phone number is required");
    } else if (email === "") {
      setErrMessage("Email is required");
    } else if (!emailValidation()) {
      setErrMessage("Please enter a valid email");
    } else if (subject === "") {
      setErrMessage("Subject is required");
    } else if (message === "") {
      setErrMessage("Message is required");
    } else {
      setSuccessMessage(`Thank you ${username}, message successfully sent`);
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };
  */

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center text-5xl">
        <Title title="Contact/Inform Us To Visit or Send Us An Enquiry "  />
      </div>

      <div className="w-full h-auto flex flex-col lgl:flex-row justify-between ">
        <div className=" grid grid-cols-1 md:flex gap-2 py-2">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form
              action="https://getform.io/f/4a5f26c5-fda2-4c23-9c6e-a519a9b6272a"
              method="POST"
              className="w-full flex flex-col gap-6 py-2 lgl:py-5"
            >
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-50 uppercase tracking-wide">
                    NAME
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className="contactInput"
                    type="text"
                    name="NAME"
                    required
                  />
                </div>

                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-50 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className="contactInput"
                    type="number"
                    name="Phone Number"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-50 uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="contactInput"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-50 uppercase tracking-wide">
                  Subject
                </p>
                <input
                  className="contactInput"
                  type="text"
                  name="Subject"
                  required
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-50 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  name="Message"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className="contactInput"
                  cols={30}
                  rows={8}
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  type="submit" // onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base bg-gradient-to-b from-blue-500 to-blue-600 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent text-yellow-100"
                >
                  Send An Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="justify-center">
        <GoogleMap />
      </div>
       {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://www.facebook.com"
              className="text-white hover:text-orange-500"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://www.twitter.com"
              className="text-white hover:text-orange-500"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.instagram.com"
              className="text-white hover:text-orange-500"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-white hover:text-orange-500"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>

          {/* Footer Links */}
          <div className="text-center md:text-left">
            <p className="mb-4">
              &copy; 2024  Maghandi Institute Of Technology. All Rights Reserved.
            </p>
            <div className="space-x-6">
              <Link to="/learn-more" className="hover:underline">
                About
              </Link>
              <Link to="/login" className="hover:underline">
                Apply
              </Link>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
