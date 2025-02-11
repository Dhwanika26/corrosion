"use client";
import React, { useEffect, useState } from 'react';

export default function UpdatesPage() {
  const versions = [
    {
      version: '1.0.0',
      releaseDate: '2024-01-15',
      features: 'Initial release with basic functionalities.',
    },
    {
      version: '1.1.0',
      releaseDate: '2024-03-10',
      features: 'Added user authentication and profile management.',
    },
    {
      version: '1.2.0',
      releaseDate: '2024-06-20',
      features: 'Introduced advanced search and filter options.',
    },
    {
      version: '1.3.0',
      releaseDate: '2024-09-05',
      features: 'Improved UI/UX and performance optimizations.',
    },
  ];

  const [currentVersion, setCurrentVersion] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVersion((prev) => (prev + 1) % versions.length);
    }, 3000); // Change version every 3 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#E6F4F1]">
      <div className="container mx-auto py-10">
        <h1 className="text-5xl font-mono text-black text-center">
          Updates
        </h1>
        <p className="mt-4 text-lg text-center text-black">
          Stay updated with the latest news and developments regarding our product.
        </p>

        <div className="mt-10 relative">
          <h2 className="text-2xl font-semibold black">Version Timeline</h2>
          <div className="flex items-center mt-4 relative">
            <div className="relative w-full h-1 bg-gray-300">
              <div
                className="absolute h-full bg-blue-500 transition-width duration-500"
                style={{
                  width: `${(currentVersion + 1) * (100 / versions.length)}%`,
                }}
              ></div>
            </div>
            <div
              className="absolute top-0"
              style={{
                left: `${(currentVersion + 0.5) * (100 / versions.length)}%`,
                transform: 'translateX(-50%)',
              }}
            >
              <div className="w-4 h-4 rounded-full bg-blue-500 relative top-1/2 transform -translate-y-1/2"></div>
            </div>
          </div>
          <div className="flex justify-between mt-6 text-black">
            {versions.map((version, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${
                  index === currentVersion ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h3 className="text-xl font-bold">{version.version}</h3>
                <p>{version.releaseDate}</p>
                <p>{version.features}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-black">Version Details</h2>
          <table className="min-w-full mt-4 border border-gray-300 bg-gray-50">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Version</th>
                <th className="border border-gray-300 px-4 py-2">Release Date</th>
                <th className="border border-gray-300 px-4 py-2">Features</th>
              </tr>
            </thead>
            <tbody>
              {versions.map((version, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
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
