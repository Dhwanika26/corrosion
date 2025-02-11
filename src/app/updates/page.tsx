"use client";
import React, { useEffect, useState } from "react";

export default function UpdatesPage() {
  const versions = [
    {
      version: "1.0.0",
      releaseDate: "2024-01-15",
      features: "Initial release with basic functionalities.",
    },
    {
      version: "1.1.0",
      releaseDate: "2024-03-10",
      features: "Added user authentication and profile management.",
    },
    {
      version: "1.2.0",
      releaseDate: "2024-06-20",
      features: "Introduced advanced search and filter options.",
    },
    {
      version: "1.3.0",
      releaseDate: "2024-09-05",
      features: "Improved UI/UX and performance optimizations.",
    },
  ];

  const [currentVersion, setCurrentVersion] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVersion((prev) => (prev + 1) % versions.length);
    }, 3000); // Change version every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#E6F4F1]">
      <div className="container mx-auto py-10 px-6">
        <h1 className="text-5xl font-mono text-black text-center">Updates</h1>
        <p className="mt-4 text-lg text-center text-black">
          Stay updated with the latest news and developments regarding our product.
        </p>

        {/* Version Timeline */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-black">Version Timeline</h2>
          <div className="relative mt-4">
            <div className="w-full h-2 bg-gray-300 rounded-lg overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-1000 ease-in-out"
                style={{ width: `${((currentVersion + 1) / versions.length) * 100}%` }}
              />
            </div>
            <div
              className="absolute top-1/2 transform -translate-y-1/2 left-0 transition-all duration-1000 ease-in-out"
              style={{ left: `${((currentVersion + 0.5) / versions.length) * 100}%` }}
            >
              <div className="w-5 h-5 bg-blue-500 rounded-full shadow-md"></div>
            </div>
          </div>

          <div className="mt-6 text-center">
            {versions.map((version, index) => (
              <div key={index} className={`transition-all duration-500 ${index === currentVersion ? "block" : "hidden"}`} aria-live="polite">
                <h3 className="text-xl font-bold">{version.version}</h3>
                <p className="text-gray-700">{version.releaseDate}</p>
                <p className="text-gray-800">{version.features}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Version Details Table */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-black">Version Details</h2>
          <table className="w-full mt-4 border border-gray-300 bg-white shadow-lg">
            <thead>
              <tr className="bg-gray-200 text-black">
                <th className="border border-gray-300 px-4 py-2 text-left">Version</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Release Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Features</th>
              </tr>
            </thead>
            <tbody>
              {versions.map((version, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="border border-gray-300 px-4 py-2">{version.version}</td>
                  <td className="border border-gray-300 px-4 py-2">{version.releaseDate}</td>
                  <td className="border border-gray-300 px-4 py-2">{version.features}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
