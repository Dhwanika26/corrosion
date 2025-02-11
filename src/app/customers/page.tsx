"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setError("");
    setSuccess("");
  };

  const validateEmail = (email: string) => emailPattern.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, city, phone } = formData;

    // Validate inputs
    if (!name || !email || !city || !phone) {
      setError("All fields are required!");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulating API submission
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", city: "", phone: "" });
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } catch (err) {
      setError("Error submitting the form. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#E6F4F1]">
      <div className="container mx-auto py-10 px-6">
        <h1 className="text-5xl font-mono text-center mb-6 text-black">
          Contact Us
        </h1>

        <p className="text-black text-sans text-center text-[22px] leading-[30px] tracking-tight mb-10">
          Connect with us to explore the future of critical asset intelligence.
          Let’s Build, Ship, Serve, and Evolve—Faster, Together!
        </p>

        <div className="mt-10">
          <p className="text-black mb-4">
            We are driven by a commitment to excellence, using scientifically
            proven technology and guidance to support industries where
            operational perfectionism and safety are paramount. With Corrosion
            Control, you can count on a trusted partner committed to protecting
            your assets through unparalleled corrosion visibility and
            performance optimization.
          </p>
          <p className="text-black mb-4">
            Our team is here to support you every step of the way, from
            deployment to smooth, successful operations. We are driven by a
            commitment to quality which is evident in every project we
            undertake, and we welcome the opportunity to collaborate. Feel free
            to contact us at any point of time regarding doubts, queries, and
            suggestions!
          </p>
          <p className="text-black mb-4">Contact us:</p>
          <p className="text-black mb-2">
            Mr. A. Mathew | Email:{" "}
            <a
              href="mailto:mathew@corrosionintel.com"
              className="text-blue-400 underline"
            >
              mathew@corrosionintel.com
            </a>
          </p>
          <p className="text-black mb-2">
            Mr. Ashutosh Kumar | Email:{" "}
            <a
              href="mailto:ashutosh@corrosionintel.com"
              className="text-blue-400 underline"
            >
              ashutosh@corrosionintel.com
            </a>
          </p>
        </div>

        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
        {success && (
          <div className="text-green-500 mb-4 text-center">{success}</div>
        )}

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-md mt-10"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="city" className="block text-gray-700 font-medium mb-2">
              City
            </label>
            <input
              type="text"
              id="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your city"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#0A6E4F] text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors w-full mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
