import React from 'react';

const About = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Header Section */}
      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">SensoryScape</h1>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Column: About Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800">
              About <span className="text-green-400">Us</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              SensoryScape is dedicated to creating innovative solutions for sensory stimulation. Our mission is to help children with autism improve emotional regulation and develop essential social skills.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              By combining technology with evidence-based methods, we strive to make a meaningful impact on their lives. Our team is committed to designing accessible, effective sensory tools that make a difference for families across the globe.
            </p>
            <a
              href="#mission"
              className="mt-6 inline-block px-8 py-3 bg-green-400 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-teal-700 transition duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Right Column: Image */}
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img
              src="Sensory scape\src\assets\img.png" // Make sure the image path is correct
              alt="Illustration showing SensoryScape team working together"
              className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
