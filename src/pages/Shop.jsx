import React from "react";
import Header from "../components/Header";
import "../styles/Shop.css";

const Shop = () => {
  return (
    <div className="shop-page bg-gray-50 font-sans">
      {/* Header Section */}
      <header className="header sticky top-0 z-50">
        <Header />
      </header>

      {/* Main Shop Content */}
      <main className="py-10">
        <div className="shop-container max-w-screen-xl mx-auto px-6">
          <h1 className="text-3xl font-semibold text-center text-green-700 mb-6">Plans & Pricing</h1>
          <p className="text-center text-gray-600 mb-10">
            I accept to share data to enable more research
          </p>

          <div className="plans-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Financial Aid Plan */}
            <div className="plan-card bg-gradient-to-br from-green-200 to-teal-300 text-white border border-green-600 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-6 flex flex-col text-center">
              <h3 className="text-xl text-gray-600 font-semibold mb-4">Financial Aid</h3>
              <ul className="space-y-2 mb-4 flex-grow">
                <li>Warranty</li>
                <li>1 Month data history</li>
                <li>2 Collaborators</li>
              </ul>
              <button className="btn-apply bg-green-400 text-white py-2 px-6 rounded-lg hover:bg-green-500 transition-all duration-300">Apply Here</button>
            </div>

            {/* Sale Plan */}
            <div className="plan-card bg-gradient-to-br from-blue-100 to-blue-300 text-white border border-blue-500 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-6 flex flex-col text-center">
              <h3 className="text-xl  text-gray-600  font-semibold mb-4">Sale</h3>
              <ul className="space-y-2  mb-4 flex-grow">
                <li>Warranty</li>
                <li>3 Months data history</li>
                <li>10 Collaborators</li>
              </ul>
              <button className="btn-choose bg-blue-400 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-all duration-300">Choose Plan</button>
            </div>

            {/* Subscription Plan */}
            <div className="plan-card bg-gradient-to-br from-purple-200 to-purple-300 text-white border border-purple-400 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-6 flex flex-col text-center relative">
              <div className="absolute top-0 right-0 bg-purple-500 text-white py-1 px-4 rounded-bl-lg text-sm font-semibold">Most Popular</div>
              <h3 className="text-xl  text-gray-600 font-semibold mb-4">Subscription</h3>
              <p className="mb-4  text-gray-600 ">
                Automation plus enterprise-grade features.
              </p>
              <ul className="space-y-2 mb-4 flex-grow">
                <li>Maintenance</li>
                <li>Automatic Updates</li>
                <li>Gold Badges</li>
                <li>Unlimited Collaborators</li>
                <li>Custom Data Retention</li>
              </ul>
              <button className="btn-choose bg-purple-400 text-white py-2 px-6 rounded-lg hover:bg-purple-600 transition-all duration-300">Choose Plan</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shop;
