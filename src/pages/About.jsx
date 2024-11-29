import React from 'react';

const About = () => {
  return (
    <div className="shop-page bg-gray-50 font-sans">
      {/* Header Section */}
      <header className="header sticky top-0 z-50">
        <Header />
      </header>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: About Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 leading-tight">
              About <span className="text-green-600">Us</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              SensoryScape is committed to designing unique, cutting-edge solutions for sensory stimulation. Our mission is to empower children with autism by helping them regulate emotions and build critical social skills.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              With technology-driven tools and research-backed methods, we strive to make a difference in their lives. Our dedicated team is here to create accessible and impactful sensory solutions for families worldwide.
            </p>
            <a
              href="#mission"
              className="mt-6 inline-block px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
            >
              Learn More
            </a>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center">
            <img
              src=".\src\assets\Illustration (1).png"
              alt="SensoryScape Team"
              className="w-full max-w-md md:max-w-lg rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 py-8">
        <div className="container mx-auto px-6 text-center text-white">
          <p className="text-sm">&copy; 2024 SensoryScape. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
