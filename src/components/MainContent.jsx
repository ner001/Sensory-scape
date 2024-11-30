import React from "react";
import { useNavigate } from "react-router-dom";
import child from '../assets/child.jpg'; 
import logo from '../assets/Logo.png';
import Button from "../components/Button.jsx";

const MainContent = () => {
  const navigate = useNavigate();

  return (
    <main className="main-content font-sans">

      {/* Intro Section */}
      <section className="flex items-center justify-between py-12 px-6 md:px-12 bg-gradient-to-r from-green-400 to-gray-800 text-white">
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl font-semibold leading-tight">Sensory Scape</h1>
          <h2 className="text-2xl font-medium">They deserve better!</h2>
          <p className="text-lg">
            Welcome to our game designed to help autistic children understand and
            learn their emotions. Our platform offers an intuitive dashboard
            allowing specialists to choose the emotion on which the child will
            work.
          </p>
          <p className="text-lg">
            Thanks to innovative tools such as a holographic projector, sensors, and
            actuators, the child is guided in identifying and accepting their
            emotions.
          </p>
          <p className="text-lg">
            Our product is specially designed for therapy centers, providing a safe
            and secure environment to promote the emotional development of children
            with autism.
          </p>
          <button 
            className="mt-6 py-2 px-6 bg-white text-green-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 hover:shadow-xl transform transition-all duration-300"
            onClick={() => navigate("/signin")}
          >
            Login
          </button>
        </div>
        <div className="hidden md:block md:w-1/2">
          <img 
            src={child} 
            alt="Child Illustration" 
            className="object-cover w-80 h-80 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
          />
        </div>
      </section>

    {/* Clients Section */} 
    <section className="py-12 bg-gray-50">
        <h2 className="text-3xl text-center font-semibold mb-8 text-gray-700">Our Clients</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-screen-xl mx-auto">
          <img 
            src='.\src\assets\orchide.png' 
            alt="Client 1" 
            className="h-16 object-contain hover:scale-105 transform transition-all duration-300"
          />
          <img 
            src='.\src\assets\lexpert.png' 
            alt="Client 2" 
            className="h-16 object-contain hover:scale-105 transform transition-all duration-300"
          />
          <img 
            src='.\src\assets\amal.png' 
            alt="Client 3" 
            className="h-16 object-contain hover:scale-105 transform transition-all duration-300"
          />
          <img 
            src='.\src\assets\omega.png' 
            alt="Client 4" 
            className="h-16 object-contain hover:scale-105 transform transition-all duration-300"
          />
          <img 
            src='.\src\assets\graine.png' 
            alt="Client 5" 
            className="h-16 object-contain hover:scale-105 transform transition-all duration-300"
          />
        </div>
      </section>

    {/* Features Section */}
      <section id="features" className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Key Features</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Designed to empower therapists and support children, our product is equipped with cutting-edge features for optimal emotional development and guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto px-6">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl">
            <div className="w-12 h-12 mb-4 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9V5.25a3.75 3.75 0 017.5 0V9M7.5 9h9M4.5 11.25h15m-3.75 3.75a3.75 3.75 0 11-7.5 0m9 1.875v1.5a2.625 2.625 0 01-2.625 2.625h-6.75A2.625 2.625 0 014.5 18.375v-1.5"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-green-600">Monitoring</h4>
            <p className="text-gray-600 mt-2">
              Full automation of membership renewals and payments for effortless management.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl">
            <div className="w-12 h-12 mb-4 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M9 16h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-green-600">Control Panel</h4>
            <p className="text-gray-600 mt-2">
              Track emotional responses and dynamically adjust therapeutic guidance.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl">
            <div className="w-12 h-12 mb-4 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 6.75h9M11.25 12h9m-9 5.25h9m-13.5-7.5H5.25a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25h4.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-green-600">Dashboards</h4>
            <p className="text-gray-600 mt-2">
              Intuitive dashboards deliver actionable insights and physical stimuli for development.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl">
            <div className="w-12 h-12 mb-4 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2m16-8a4 4 0 00-8-3.874M12 12.126a4 4 0 00-8 3.874m16 0H4"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-green-600">Research</h4>
            <p className="text-gray-600 mt-2">
              Tailored experiences for every child based on individual needs and progress.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 bg-green-50">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12 max-w-screen-xl mx-auto">
          <div className="flex-1">
            <img src={logo} alt="logo" className="w-40 md:w-56" />
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-semibold text-gray-700">About Us</h2>
            <p className="text-lg text-gray-600">
              Our game is designed to help autistic children understand and express emotions.
              Our product is meticulously designed to cater to therapy centers, providing a safe and playful environment that nurtures
              emotional development for children with autism.
            </p>
            <Button text="Read More" />
          </div>
        </div>
      </section>

      {/* Autism Section */}
      <section className="py-12 bg-white">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12 max-w-screen-xl mx-auto">
          <div className="flex-1">
            <img 
              src="\src\assets\autism.png" 
              alt="autism" 
              className="w-full md:w-3/4 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300" 
            />
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-semibold text-gray-700">Read More About Autism</h2>
            <p className="text-lg text-gray-600">
              Autism, also known as Autism Spectrum Disorder, is a neurodevelopmental condition that affects how 
              individuals perceive and interact with the world around them. It is characterized by challenges in social communication 
              and interaction, as well as restricted and repetitive patterns of behavior, interests, or activities.
            </p>
            <Button text="Learn More" />
          </div>
        </div>
      </section>

    {/* Causes Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Why Choose Our Product?</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Our product is a game-changer for supporting the emotional development of children with autism. Designed with care and 
            expertise, it empowers specialists to provide effective therapy while promoting long-term well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto px-6">
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <div className="w-12 h-12 mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-5h4m-6 4V5a2 2 0 00-2-2H6a2 2 0 00-2 2v9"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-green-600">Emotional Development</h4>
            <p className="text-gray-600 mt-2">
              Helps children understand, express, and regulate their emotions in a supportive environment.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <div className="w-12 h-12 mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7m2-2h-7a1 1 0 01-1-1V2a1 1 0 00-1-1H8a1 1 0 00-1 1v4"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-green-600">Therapist Guidance</h4>
            <p className="text-gray-600 mt-2">
              Provides tools for therapists to deliver tailored emotional training for optimal progress.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <div className="w-12 h-12 mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 9l-3 3 3 3m0 0H7m6 0a2 2 0 100-4m6 8a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-green-600">Long-Term Impact</h4>
            <p className="text-gray-600 mt-2">
              Encourages the development of essential social skills and emotional resilience for life.
            </p>
          </div>
        </div>
      </section>
    </main> 
  );
};

export default MainContent;
