import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const LearnMore: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-96 relative" style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1691849271923-46ac13043dbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">Learn More About  Maghandi Institute Of Technology</h1>
        </div>
      </section>

      {/* About Us Section */}
      <section className="max-w-5xl mx-auto p-8 mt-10 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
        <p className="text-lg text-gray-700 mb-6 bg-green-200">
          Our school is dedicated to providing high-quality education to students from all backgrounds. With a history spanning over
          several decades, we have established ourselves as a premier institution offering diverse academic programs designed to meet the
          needs of today’s global society.
        </p>
        <p className="text-lg text-gray-700 bg-blue-400">
          From cutting-edge technology to a committed and experienced faculty, we are proud to foster a dynamic learning environment that
          nurtures the growth and development of every student. Join us to embark on a journey of academic excellence and personal growth.
        </p>
      </section>

      {/* Mission Statement Section */}
      <section className="max-w-5xl mx-auto p-8 mt-10 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
        <p className="text-lg text-gray-700">
          Our mission is to empower students to become confident, critical thinkers who excel in their academic pursuits and contribute to
          the betterment of society. We are committed to fostering a supportive, inclusive, and innovative learning environment where
          students can achieve their full potential.
        </p>
      </section>

      {/* Programs Offered Section */}
      <section className="max-w-5xl mx-auto p-8 mt-10 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Programs Offered</h2>
        <ul className="list-disc list-inside space-y-4">
          <li>Bachelor's Degree in Business Administration</li>
          <li>Bachelor's Degree in Computer Science</li>
          <li>Master's Degree in Educational Leadership</li>
          <li>Ph.D. in Environmental Studies</li>
          <li>Certificate Programs in Digital Marketing and Data Science</li>
        </ul>
      </section>

      {/* Faculty and Staff Section */}
      <section className="max-w-5xl mx-auto p-8 mt-10 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Faculty and Staff</h2>
        <p className="text-lg text-gray-700">
          We are proud to have a dedicated and passionate faculty and staff who are committed to helping students succeed both inside and
          outside the classroom. Our faculty members are experts in their fields and are here to guide students in their academic journey.
        </p>
      </section>

      {/* History Section */}
      <section className="max-w-5xl mx-auto p-8 mt-10 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">School History</h2>
        <p className="text-lg text-gray-700">
          Founded in 1965, our school began with a vision to provide education that blends academic rigor with real-world application. Over
          the years, we have grown into a diverse and dynamic institution, offering students the opportunity to learn and grow in an
          innovative and collaborative environment. Our legacy continues as we adapt to the changing needs of the modern world.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-500 py-8 text-white mt-12">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold">Want to Learn More?</h3>
          <p className="mt-4 text-lg">Contact us today for more information about our programs and how to apply.</p>
          <button className="bg-white text-blue-500 py-2 px-6 mt-6 rounded-lg font-semibold hover:bg-gray-200">
          <a href="/contact">Get In Touch</a>
          </button>
        </div>
      </section>
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

export default LearnMore;
