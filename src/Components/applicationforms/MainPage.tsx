import React, { useState } from 'react';
import RequirementsModal from './RequirementsModal';

const MainPage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to   Maghandi Institute Of Technology Admission System</h1>
      <p className="text-lg mb-6">Click the button below to view the application requirements.</p>
      
      <button
        onClick={openModal}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        View Requirements
      </button>

      {/* Modal Component */}
      <RequirementsModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default MainPage;
