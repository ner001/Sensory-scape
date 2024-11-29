import React from 'react';
import Header from "../components/Header";

const Contact = () => {
  return (
    <div className="shop-page bg-gray-50 font-sans">
      {/* Header Section */}
      <header className="header sticky top-0 z-50">
        <Header />
      </header>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Contact <span className="text-green-600">Us</span>
        </h2>
        <p className="text-center text-gray-600 mt-4">
          Have a question or remark? We'd love to hear from you!
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800">Get in Touch</h3>
            <p className="text-gray-600 mt-2">
              Fill out the form below and we’ll get back to you as soon as possible.
            </p>
            <form className="mt-6">
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Message</label>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-green-600 text-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p className="mt-4">
              Reach out to us through any of the following channels:
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 mr-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12c0-4-4-8-4-8s-4 4-4 8a4 4 0 108 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M16 12h.01M12 16v.01"
                  />
                </svg>
                545 Mavis Island, IL 91901
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 mr-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7-4 7 4M3 8v8a4 4 0 004 4h10a4 4 0 004-4V8M7 21h10"
                  />
                </svg>
                +2034 4040 3030
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 mr-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12c0-4-4-8-4-8s-4 4-4 8a4 4 0 108 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 20h.01"
                  />
                </svg>
                hello@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-white">
          <p className="text-sm">&copy; 2024 SensoryScape. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
