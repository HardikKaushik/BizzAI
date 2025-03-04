'use client'
import React from 'react';

const FraudAlert = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-red-100 border-l-8 border-red-600 shadow-lg rounded-lg mt-10">
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-bold text-red-800">Fraud Alert & Security Notice</h1>
      </div>

      <p className="text-gray-700 mb-4">
        We prioritize your safety and want to ensure you are aware of fraudulent activities targeting users online.
      </p>

      <h2 className="text-xl font-semibold text-red-700 mb-2">⚠️ Beware of the following scams:</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li><strong>Phishing Emails & Calls:</strong> Fraudsters may impersonate our team and ask for sensitive details.</li>
        <li><strong>Fake Payment Requests:</strong> Do not transfer money to unauthorized accounts claiming to be us.</li>
        <li><strong>Impersonation:</strong> Only trust official emails and phone numbers listed on our website.</li>
        <li><strong>Fake Offers:</strong> If an offer seems too good to be true, verify before proceeding.</li>
      </ul>

      <h2 className="text-xl font-semibold text-red-700 mt-6 mb-2">🚨 How to Stay Safe:</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Never share your **OTP, password, or bank details** with anyone.</li>
        <li>Verify all communication by checking our official website or customer service.</li>
        <li>Use **secure payment methods** and avoid direct bank transfers to unknown parties.</li>
        <li>Report suspicious activity immediately.</li>
      </ul>

      <h2 className="text-xl font-semibold text-red-700 mt-6 mb-2">📞 Report Fraud:</h2>
      <p className="text-gray-700">
        If you encounter any suspicious activity, please report it to our **official support team** at:  
        <strong className="text-red-800"> support@mybizai.com</strong> or call **+91-XXXXXXXXXX**.
      </p>

      <div className="mt-6 flex items-center bg-red-200 p-4 rounded-lg">
        <p className="text-gray-800 font-semibold">
          Stay vigilant! We will never ask for your password or OTP over phone or email.
        </p>
      </div>
    </div>
  );
};

export default FraudAlert;
