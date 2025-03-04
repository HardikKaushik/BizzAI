'use client'
import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Terms & Conditions</h1>
      <p className="text-gray-600">
        By using our platform, you agree to abide by these Terms & Conditions. If you do not agree, please refrain from using our services.
      </p>

      <h2 className="text-xl font-semibold mt-6">1. User Responsibilities</h2>
      <p className="text-gray-600">
        Users must not:
      </p>
      <ul className="list-disc pl-6 text-gray-600">
        <li>Engage in unlawful activities, including fraud or hacking.</li>
        <li>Post or distribute offensive, abusive, or defamatory content.</li>
        <li>Attempt to bypass security measures.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">2. Intellectual Property</h2>
      <p className="text-gray-600">
        All website content, including text, graphics, and software, is protected under copyright laws. Unauthorized reproduction is prohibited.
      </p>

      <h2 className="text-xl font-semibold mt-6">3. Account Termination</h2>
      <p className="text-gray-600">
        We reserve the right to suspend or terminate accounts that violate our policies, including:
      </p>
      <ul className="list-disc pl-6 text-gray-600">
        <li>Spamming, harassment, or illegal activities.</li>
        <li>Violation of intellectual property rights.</li>
        <li>Unauthorized access or hacking attempts.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">4. Limitation of Liability</h2>
      <p className="text-gray-600">
        We are not responsible for:
      </p>
      <ul className="list-disc pl-6 text-gray-600">
        <li>Technical failures affecting platform performance.</li>
        <li>Loss of data due to third-party breaches.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">5. Governing Law & Disputes</h2>
      <p className="text-gray-600">
        All legal matters will be handled in accordance with **Indian laws**, including IPC and the **IT Act, 2000**. Any disputes shall be resolved in courts located in India.
      </p>

      <h2 className="text-xl font-semibold mt-6">6. Changes to Terms</h2>
      <p className="text-gray-600">
        We may modify these Terms & Conditions at any time. Users will be notified of major updates.
      </p>

      <p className="text-gray-600 mt-6">For legal inquiries, contact us at **legal@mybizai.com**.</p>
    </div>
  );
};

export default TermsAndConditions;
