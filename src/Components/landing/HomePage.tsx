import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react"; // Swiper components
import "swiper/css"; // Import Swiper styles
import "swiper/css/autoplay"; // Import autoplay styles
import { Autoplay } from "swiper/modules"; // Autoplay module
import WhatsAppButton from "../../whatsapp/WhatsAppButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";
//import design from './assets/design.png'; // Import principal's picture
import { OIP } from "../../assets";
import CallButton from "../../whatsapp/CallButton";
const texts = [
  "A place where dreams take flight and knowledge knows no bounds ",
      "Embrace the journey",
      "Here, we don’t just open doors;We open minds"
];



const LandingPage: React.FC = () => {

  const [currentText, setCurrentText] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fading out

      setTimeout(() => {
        setCurrentText((prevText) => (prevText + 1) % texts.length); // Change text
        setFade(true); // Fade in new text
      }, 500); // Wait 0.5 seconds for fade-out to complete
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);









  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="bg-gray-900 text-white">
        {/*A CALL BUTTON */}
        <CallButton />

        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="space-x-6 flex">
            <Link to="/login" className="hover:text-orange-500">
              Apply
            </Link>
            <Link to="/contact" className="hover:text-orange-500">
              Contact
            </Link>
            <div className="relative group">
              <Link 
              to="/learn-more"
              className="hover:text-orange-500 inline-flex items-center">
                Information{" "}
               
              </Link>
              <div className="absolute hidden group-hover:block bg-white text-gray-900 py-2 shadow-lg rounded-md mt-2">
                
               
              </div>
            </div>
          </div>
          <div className="space-x-6 flex">
            <a
              href="https://www.facebook.com"
              className="hover:text-orange-500"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.twitter.com" className="hover:text-orange-500">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.instagram.com"
              className="hover:text-orange-500"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Navigation Bar */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Maghandi Institute Of Technology
          </Link>
          <div className="space-x-6">
            <div className="relative group">
              <Link to="/learn-more">
              <button className="hover:text-orange-600 inline-flex items-center">
                Explore School Information{" "}
               
              </button>
              </Link>
              <div className="absolute hidden group-hover:block bg-white text-gray-900 py-2 shadow-lg rounded-md mt-2">
              
               
              </div>
            </div>
            <Link to="" className="hover:text-orange-600">
              Events
            </Link>
            <Link to="/contact" className="hover:text-orange-600">
              Visit
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Animated Background */}

      
      <section className="relative h-screen animated-bg flex items-center justify-center text-white text-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fix"
          style={{
            backgroundImage:
              "url(https://plus.unsplash.com/premium_photo-1683120804333-28c5cc16c3ee?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}

        >

<h1
        className={`text-5xl font-bold text-white transition-opacity duration-500 mt-16  bg-green-500 p-2 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {texts[currentText]}
      </h1>




          <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>{" "}
          {/* Dark overlay */}
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to  Maghandi Institute Of Technology
          </h1>
          <p className="text-xl mb-6">Empowering Minds, Shaping the Future</p>
          <div className="space-x-8">
            <Link to="login">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded">
              Apply Now
            </button>
            </Link>
            <Link to="/contact">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
              Visit Us
            </button>
            </Link>
            
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg">
          Maghandi Institute Of Technology is dedicated to creating a brighter
            future through innovation, research, and excellence. We are
            committed to fostering an environment where students can thrive and
            achieve their academic and professional goals.
          </p>
        </div>
      </section>

      {/* Principal's Note Section */}
      <section className="py-12 bg-green-100">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <img
            src={OIP}
            alt="Principal"
            className="w-64 h-64 rounded-full mb-4"
          />
          <h2 className="text-3xl font-bold mb-4">A Note from Our Principal</h2>
          <p className="text-gray-700 text-lg text-center max-w-2xl">
            Welcome to Maghandi Institute Of Technology! We strive to create an inclusive and
            innovative environment for our students. Together, we will cultivate
            leaders and change-makers who are ready to face the challenges of
            tomorrow.
          </p>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Faculties</h2>
          <p className="text-gray-700 mb-4">
            Explore various departments and faculties that provide a
            well-rounded education.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/engineering"
              className="bg-gray-100 rounded-lg p-6 shadow-lg hover:bg-gray-200"
            >
              <h3 className="text-xl font-bold mb-2">Engineering</h3>
              <p className="text-gray-600">
                Discover the cutting-edge technologies and research in our
                engineering programs.
              </p>
            </Link>
            <Link
              to="/business"
              className="bg-gray-100 rounded-lg p-6 shadow-lg hover:bg-gray-200"
            >
              <h3 className="text-xl font-bold mb-2">Business</h3>
              <p className="text-gray-600">
                Empower yourself with the skills and knowledge to succeed in
                today’s global marketplace.The department aims to Develop Skilled Human Capital and
           Entrepreneurs through the Provision of dynamic quality
            scientific, technical, vocational, education and training for sustainable socio-economic transformation.
              </p>
            </Link>
            <Link
              to="/arts-humanities"
              className="bg-gray-100 rounded-lg p-6 shadow-lg hover:bg-gray-200"
            >
              <h3 className="text-xl font-bold mb-2">Arts & Humanities</h3>
              <p className="text-gray-600">
                Foster creativity, critical thinking, and communication skills
                in our diverse programs. The aim of the Department is to train talented people in the skills required by the design industry. 
          Graduating students find employment in Advertising Studios, Display Studios, Origination Studios, Television, Art Departments, Commercial Printing, Textile and Clothing Industries.
           Some Students generate their own companies providing employment for others.
              </p>
            </Link>
            <Link
              to="/arts-humanities"
              className="bg-gray-100 rounded-lg p-6 shadow-lg hover:bg-gray-200"
            >
              <h3 className="text-xl font-bold mb-2">Hotel & Catering </h3>
              <p className="text-gray-600">
              The Department of Hospitality and Tourism is 
          committed to provide students with a quality career-focused education to meet the needs of the 
          growing hospitality and tourism sector, and to cater for a new generation of students, with the ultimate goal of producing critically thinking, responsive and intellectually well-grounded individuals,
           who will easily adapt to the demands and challenges of the twenty-first century.
              </p>
            </Link>
            <Link
              to="/arts-humanities"
              className="bg-gray-100 rounded-lg p-6 shadow-lg hover:bg-gray-200"
            >
              <h3 className="text-xl font-bold mb-2">Faculty Of Construction and Civil Enginnering</h3>
              <p className="text-gray-600">
              The Civil Engineering Division is committed to providing excellent technical and vocational 
          education, training and services that will prepare students to face the challenges of employment,
           entrepreneurship and technical advancement by enhancing individuals with practical skills 
           and growth potential in the Civil Engineering Discipline.
              </p>
            </Link>
            <Link
              to="/arts-humanities"
              className="bg-gray-100 rounded-lg p-6 shadow-lg hover:bg-gray-200"
            >
              <h3 className="text-xl font-bold mb-2">Technology</h3>
              <p className="text-gray-600">
                
          We endeavor together with Industry and the Community to provide quality 
          Technological Higher and Tertiary Education and Training through teaching and learning. 
          The focused approach to development and learning should satisfy the current and future 
          Human Resources needs of the formal and informal employment sectors of Zimbabwe. The division produces detergents 
          for the institution and are working towards expanding to cater for the external community.
              </p>
            </Link>
          </div>
        </div>
      </section>

     

      {/* Carousel Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000, // 3 seconds delay for each slide
              disableOnInteraction: false, // Allow autoplay to continue even if user interacts
            }}
            loop={true} // Enable looping to make the carousel continuous
            modules={[Autoplay]} // Include the Autoplay module
            className="w-full h-full rounded"
          >
            <SwiperSlide>
              <img
                src="https://plus.unsplash.com/premium_photo-1691849271923-46ac13043dbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="School 1"
                className="w-full h-96 object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="School 2"
                className="w-full h-96 object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://plus.unsplash.com/premium_photo-1683120804333-28c5cc16c3ee?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="School 3"
                className="w-full h-96 object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Admissions Information Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Admissions Information</h2>
          <p className="text-lg text-gray-700 mb-6">
            Explore the key details for applying to  Maghandi Institute Of Technology. Learn
            about application deadlines, admission requirements, and how to
            track your application status.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-2">Application Deadlines</h3>
              <p className="text-gray-600">
                Stay on top of important application deadlines for the upcoming
                academic year.
              </p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <a href="/learn-more">Wanting To Learn More About Us?</a>
              </button>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-2">Admission Requirements</h3>
              <p className="text-gray-600">
                Review the necessary qualifications and requirements for
                prospective students.
              </p>
              <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              <a href="/requirements">Requirements</a>
              </button>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-5">Check Course Availability</h3>
              <p className="text-gray-600">
                Check available courses status and begin application
                process.
              </p>
              <button className="mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-1/2 text-center">
              <a href="/dashboard">Check Available Courses</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Dates Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Freshman Key Dates</h2>
          <ul className="text-gray-700 text-lg mb-6">
            <li>Early Action Deadline: October 15, 2024</li>
            <li>Regular Application Deadline: January 15, 2025</li>
            <li>Financial Aid Deadline: March 1, 2025</li>
          </ul>
          <Link to="/important-dates">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          View All Important Dates
        </button>
        </Link>
        </div>
      </section>

      {/* WhatsApp Button */}

      <WhatsAppButton />

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
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
