import React from "react";
import Tilt from "react-parallax-tilt";
import Header from "../components/Header";
import "../styles/Shop.css";

const Shop = () => {
  const planDetails = [
    {
      title: "Financial Aid",
      features: [
        "Warranty",
        "1 Month data history", 
        "2 Collaborators"
      ],
      buttonText: "Apply Here",
      buttonClass: "bg-green-400",
      bgClass: "bg-gray-200",
      titleClass: "text-gray-600",
      featureClass: "text-gray-600",
      mostPopular: false
    },
    {
      title: "Sale",
      features: [
        "Warranty",
        "3 Months data history",
        "10 Collaborators"
      ],
      buttonText: "Choose Plan",
      buttonClass: "bg-green-400",
      bgClass: "bg-gray-200",
      titleClass: "text-gray-600",
      featureClass: "text-gray-600",
      mostPopular: false
    },
    {
      title: "Subscription",
      features: [
        "Maintenance",
        "Automatic Updates", 
        "Gold Badges",
        "Unlimited Collaborators",
        "Custom Data Retention"
      ],
      buttonText: "Choose Plan",
      buttonClass: "bg-green-400",
      bgClass: "bg-gray-800",
      titleClass: "text-white",
      featureClass: "text-white",
      mostPopular: true
    }
  ];

  return (
    <div className="shop-page bg-gray-50 font-sans">
      {/* Header Section */}
      <header className="header sticky top-0 z-50">
        <Header />
      </header>

      {/* Main Shop Content */}
      <main className="py-10">
        <div className="shop-container max-w-screen-xl mx-auto px-6">
          <h1 className="text-3xl font-semibold text-center text-green-700 mb-6">
            Plans & Pricing
          </h1>
          <p className="text-center text-gray-600 mb-10">
            I accept to share data to enable more research
          </p>

          <div className="plans-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {planDetails.map((plan, index) => (
              <Tilt
                key={index}
                className="tilt-container h-full"
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1500}
              >
                <div 
                  className={`
                    plan-card 
                    ${plan.bgClass} 
                    border border-green-600 
                    rounded-lg 
                    shadow-lg 
                    hover:shadow-2xl 
                    transition-all 
                    duration-300 
                    p-6 
                    flex 
                    flex-col 
                    text-center 
                    relative
                    h-full
                  `}
                >
                  {plan.mostPopular && (
                    <div className="absolute top-0 right-0 bg-green-400 text-white py-1 px-4 rounded-bl-lg text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <h3 className={`text-xl font-semibold mb-4 ${plan.titleClass}`}>
                    {plan.title}
                  </h3>
                  
                  {plan.title === "Subscription" && (
                    <p className="mb-4 text-white">
                      Automation plus enterprise-grade features.
                    </p>
                  )}

                  <ul className="space-y-2 mb-4 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={plan.featureClass}>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button 
                    className={`
                      ${plan.buttonClass} 
                      text-white 
                      py-2 
                      px-6 
                      rounded-lg 
                      hover:bg-green-500 
                      transition-all 
                      duration-300
                    `}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shop;