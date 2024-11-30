import React from 'react';
import img from '../assets/img.png';
import logo from '../assets/Logo.png';
import Footer from "../components/Footer";
import Header from '../components/Header';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-gray-800 text-gray-900 font-sans">
      {/* Header Section */}
      <header >
        <Header />
      </header>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Left Column: About Content */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight mb-4">
              About <span className="text-green-600">Us</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              SensoryScape is dedicated to creating innovative solutions for sensory stimulation. Our mission is to help children with autism improve emotional regulation and develop essential social skills.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              By combining technology with evidence-based methods, we strive to make a meaningful impact on their lives. Our team is committed to designing accessible, effective sensory tools that make a difference for families across the globe.
            </p>
            <a
              href="#mission"
              className="inline-block px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-teal-700 transition duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Right Column: Image */}
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img
              src={img}
              alt="Illustration showing SensoryScape team working together"
              className="w-full max-w-md md:max-w-lg "
            />
          </div>
        </div>
      </section>
      
      <footer >
      <Footer />
      </footer>
    </div>
  );
};

export default About;

