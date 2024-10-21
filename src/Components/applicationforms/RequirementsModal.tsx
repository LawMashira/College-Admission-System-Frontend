import React from 'react';

interface RequirementsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RequirementsModal: React.FC<RequirementsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <h2 className="text-2xl font-bold mb-4 text-center">Application Requirements</h2>
        
        <ul className="list-disc list-inside space-y-3">
          <li>Valid national identification or passport.</li>
          <li>High school diploma or equivalent qualification.</li>
          <li>Proof of address.</li>
          <li>Certified copies of academic certificates.</li>
          <li>Completed application form.</li>
          <li>Personal statement or letter of intent.</li>
        </ul>

        <button 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default RequirementsModal;
