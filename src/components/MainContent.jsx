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
      <section className="flex items-center justify-between py-12 px-6 md:px-12 bg-gradient-to-r from-green-400 to-blue-600 text-white">
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
      <section id="features" className="py-12 bg-gray-100">
        <h2 className="text-3xl text-center font-semibold mb-8 text-gray-700">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-green-100 hover:scale-105 transform transition-all duration-300">
            <h4 className="text-xl font-semibold text-green-600">Monitoring</h4>
            <p className="text-gray-600">Our membership management software provides full automation of membership renewals and payments.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-green-100 hover:scale-105 transform transition-all duration-300">
            <h4 className="text-xl font-semibold text-green-600">Control Panel</h4>
            <p className="text-gray-600">Monitors emotional responses and adjusts guidance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-green-100 hover:scale-105 transform transition-all duration-300">
            <h4 className="text-xl font-semibold text-green-600">Dashboards</h4>
            <p className="text-gray-600">Provides physical stimuli to support emotional development.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-green-100 hover:scale-105 transform transition-all duration-300">
            <h4 className="text-xl font-semibold text-green-600">Research</h4>
            <p className="text-gray-600">Allows specialists to tailor the experience to each child.</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 bg-gray-50">
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
      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl text-center font-semibold mb-8 text-gray-700">Why Our Product is Important?</h2>
        <p className="text-lg text-center mb-8 text-gray-600 max-w-screen-lg mx-auto">
          Our product is important because it provides a comprehensive solution for supporting the emotional development of children
          with autism. Through these features, it enables specialists to enhance the effectiveness of therapy and promote the well-being
          of these children.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            <h4 className="text-xl font-semibold text-green-600">Emotional Development</h4>
            <p className="text-gray-600">Helps children understand and regulate their emotions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            <h4 className="text-xl font-semibold text-green-600">Therapist Guidance</h4>
            <p className="text-gray-600">Supports therapists in providing targeted emotional training.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            <h4 className="text-xl font-semibold text-green-600">Long-Term Impact</h4>
            <p className="text-gray-600">Promotes social skills and overall emotional well-being.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
