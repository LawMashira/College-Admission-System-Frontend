import React from 'react';

const ImportantDates: React.FC = () => {
  const dates = [
    { event: "Application Deadline", date: "December 15, 2024" },
    { event: "Early Admission Results", date: "January 10, 2025" },
    { event: "Regular Admission Results", date: "March 15, 2025" },
    { event: "Freshman Orientation", date: "August 20, 2025" },
    { event: "Classes Begin", date: "September 1, 2025" },
    { event: "Mid-term Exams", date: "October 15-20, 2025" },
    { event: "Winter Break", date: "December 20, 2025 - January 5, 2026" },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Important Dates</h2>
        
        <ul className="space-y-4">
          {dates.map((item, index) => (
            <li key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm">
              <span className="text-lg font-semibold text-gray-700">{item.event}</span>
              <span className="text-lg text-blue-600">{item.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImportantDates;
