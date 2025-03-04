import React from "react";

const Aboutsection = () => {
  return (
    <section className="bg-gradient-to-b from-purple-300 via-blue-200 to-white text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl text-gray-700 font-bold mb-6 animate-fade-in">
          Empowering Businesses with AI-Driven Solutions
        </h2>
        <p className="text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto mb-10">
          MyBizAI is an all-in-one AI-powered business suite designed to simplify and automate crucial aspects of business operations. Whether you run a retail store, a service-based business, or a real estate firm, MyBizAI helps you scale efficiently with AI-powered automation.
        </p>
      </div>

      <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Feature Cards */}
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
          >
            <h3 className="text-xl text-gray-800 font-semibold">{feature.title}</h3>
            <p className="text-gray-400 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-3xl text-gray-800 font-semibold mb-4">Our Vision</h3>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          At MyBizAI, we believe AI should be accessible to every business. Our mission is to democratize AI and empower businesses with intelligent, data-driven solutions that drive success.
        </p>
        <button className="mt-8 px-6 py-3 bg-white text-purple-700 font-semibold rounded-full shadow-md hover:bg-gray-100 transition">
          Join MyBizAI Today 🚀
        </button>
      </div>
    </section>
  );
};

// Features Data
const features = [
  {
    title: "AI-Powered Insights & Automation",
    description:
      "Get real-time recommendations to optimize pricing, manage slow-moving inventory, and increase profitability.",
  },
  {
    title: "One-Click Marketing & Sales Automation",
    description:
      "Run Facebook, Instagram, WhatsApp, and Google ads with AI-generated content and targeting.",
  },
  {
    title: "Smart Inventory & Order Management",
    description:
      "Track and manage stock levels, automate order processing, and prevent overstocking or understocking.",
  },
  {
    title: "CRM & Customer Engagement",
    description:
      "Store customer details, track interactions, and personalize engagement with AI-powered chatbots.",
  },
  {
    title: "Seamless Social Media Automation",
    description:
      "Create, schedule, and manage social media posts, promotions, and interactions with AI-driven insights.",
  },
  {
    title: "Scalable for Any Business",
    description:
      "From small retailers to service-based businesses and real estate firms, MyBizAI adapts to your business needs.",
  },
];

export default Aboutsection;
