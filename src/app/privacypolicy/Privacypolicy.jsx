'use client'
import React from 'react';

const Privacypolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
      <p className="text-gray-600">
        This Privacy Policy outlines how we collect, use, protect, and store your personal data when you use our platform. By accessing our services, you agree to the terms mentioned in this policy.
      </p>

      <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
      <p className="text-gray-600">
        We collect both personal and non-personal data, which may include:
      </p>
      <ul className="list-disc pl-6 text-gray-600">
        <li>Personal details such as name, email address, phone number.</li>
        <li>Account credentials, including login information.</li>
        <li>Device and browser information for security and analytics.</li>
        <li>Transaction details if you make a purchase.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">2. How We Use Your Information</h2>
      <p className="text-gray-600">
        Your data helps us:
      </p>
      <ul className="list-disc pl-6 text-gray-600">
        <li>Enhance your experience by personalizing content.</li>
        <li>Process transactions and provide customer support.</li>
        <li>Analyze user behavior for better platform performance.</li>
        <li>Prevent fraudulent activities and ensure security.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">3. Data Protection & Security</h2>
      <p className="text-gray-600">
        We implement robust security measures, including:
      </p>
      <ul className="list-disc pl-6 text-gray-600">
        <li>Encryption protocols to protect sensitive data.</li>
        <li>Regular security audits to prevent data breaches.</li>
        <li>Restricted access to personal information.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">4. Third-Party Sharing</h2>
      <p className="text-gray-600">
        We do not sell or trade user data. However, we may share information with:
      </p>
      <ul className="list-disc pl-6 text-gray-600">
        <li>Trusted service providers for hosting, analytics, and payment processing.</li>
        <li>Law enforcement authorities if required by legal obligations.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">5. Your Rights</h2>
      <p className="text-gray-600">
        You have the right to:
      </p>
      <ul className="list-disc pl-6 text-gray-600">
        <li>Request access to the personal data we store.</li>
        <li>Update or correct inaccuracies in your data.</li>
        <li>Request deletion of your data under applicable laws.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">6. Compliance with Indian Law</h2>
      <p className="text-gray-600">
        This Privacy Policy complies with the **Information Technology Act, 2000**, and related **Indian Penal Code (IPC) regulations** regarding data protection.
      </p>

      <p className="text-gray-600 mt-6">For privacy-related concerns, contact us at **support@mybizai.com**.</p>
    </div>
  );
};

export default Privacypolicy;
