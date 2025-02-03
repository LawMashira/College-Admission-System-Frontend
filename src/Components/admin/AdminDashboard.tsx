import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Applicant {
  id: number;
  name: string;
  surname: string;
  email: string;
  mobileNumber: string;
  courseName: string;
  title: string;
  maritalStatus: string;
  dob: string;
  gender: string;
  placeOfBirth: string;
  nationality: string;
  country: string;
  city: string;
  maidName: string;
  nationalId: string;
  address: string;
}

const AdminDashboard: React.FC = () => {
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [message, setMessage] = useState<string>('');
 

  // Fetch applicants on component mount
  useEffect(() => {
    fetchApplicants();
  }, []);
  
  // Fetch all applicants from the backend
  const fetchApplicants = async () => {
    try {
      const response = await axios.get('https://school-admission-system-production.up.railway.app/api/applicants/all');
      setApplicants(response.data);
    } catch (error) {
      console.error('Error fetching applicants', error);
    }
  };

  // Delete an applicant by ID
  const deleteApplicant = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/api/admin/applicants/delete/${id}`);
      setMessage('Applicant deleted successfully.');
      fetchApplicants(); // Re-fetch applicants to update the list
    } catch (error) {
      console.error('Error deleting applicant', error);
      setMessage('Failed to delete applicant.');
    }
  };
 
  return (
    <div className="container mx-auto px-4 py-8">
     <div className='flex justify-end items-center w-full fixed top-0 right-0 p-4 bg-white'> <h2 className="text-2xl font-bold mb-6">Admin Dashboard - Applicants</h2>
      <Link to="/course"
             
              className="ml-auto bg-blue-500 text-white py-2 px-4 rounded  "
            >
              Create Course
            </Link></div>
      {message && <p className="text-green-500 mb-4">{message}</p>}

      {applicants.length > 0 ? (
        <table className="min-w-full bg-white mt-16">
          <thead>
            <tr>
              
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Surname</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Mobile</th>
              <th className="border border-gray-300 px-4 py-2">DOB</th>
              <th className="border border-gray-300 px-4 py-2">Gender</th>
              <th className="border border-gray-300 px-4 py-2">National ID</th>
              <th className="border border-gray-300 px-4 py-2">Nationality</th>
              <th className="border border-gray-300 px-4 py-2">Country</th>
              <th className="border border-gray-300 px-4 py-2">City</th>
              <th className="border border-gray-300 px-4 py-2">Address</th>
              <th className="border border-gray-300 px-4 py-2">Course</th>
              <th className="border border-gray-300 px-4 py-2">Document</th>  {/* Column for the PDF */}
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant) => (
              <tr key={applicant.id}>
                <td className="py-2 px-4 border-b">{applicant.id}</td>
                <td className="py-2 px-4 border-b">{applicant.title}</td>
                <td className="py-2 px-4 border-b">{applicant.name}</td>
                <td className="py-2 px-4 border-b">{applicant.surname}</td>
                <td className="py-2 px-4 border-b">{applicant.email}</td>
                <td className="py-2 px-4 border-b">{applicant.mobileNumber}</td>
                <td className="border border-gray-300 px-4 py-2">{applicant.dob}</td>
                <td className="border border-gray-300 px-4 py-2">{applicant.gender}</td>
                <td className="border border-gray-300 px-4 py-2">{applicant.nationalId}</td>
                <td className="border border-gray-300 px-4 py-2">{applicant.nationality}</td>
                <td className="border border-gray-300 px-4 py-2">{applicant.country}</td>
                <td className="border border-gray-300 px-4 py-2">{applicant.city}</td>
                <td className="border border-gray-300 px-4 py-2">{applicant.address}</td>
                <td className="py-2 px-4 border-b">{applicant.courseName}</td>
                <td>
                 {/* Download link for the PDF */}
                 <a
                  href={`http://localhost:8080/api/applications/download-pdf/${applicant.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Download PDF 
                </a>
              </td>
              
              
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => deleteApplicant(applicant.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table> 
      )
       : (
        <p>No applicants found.</p>
        
      )}
        
      
    </div>
  );
};

export default AdminDashboard;
