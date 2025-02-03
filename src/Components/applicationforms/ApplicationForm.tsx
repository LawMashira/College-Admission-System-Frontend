import React, { useState } from 'react';
import axios from 'axios';

const ApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    title: '',
    maritalStatus: '',
    email: '',
    mobileNumber: '',
    dob: '',
    gender: '',
    placeOfBirth: '',
    nationality: '',
    country: '',
    city: '',
    maidName: '',
    nationalId: '',
    address: '',
    courseName: '', // Added courseName
  });

  const [document, setDocument] = useState<File | null>(null);  // State for PDF document
  const [message, setMessage] = useState('');

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle document upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setDocument(e.target.files[0]);  // Set the selected file
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData();
    Object.keys(formData).forEach(key => {
      form.append(key, formData[key as keyof typeof formData]);
    });

    if (document) {
      form.append('document', document);  // Append document (PDF file)
    }

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const res = await axios.post('https://school-admission-system-production.up.railway.app/api/applications/submit', form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage('Application submitted successfully!');
    } catch (error) {
      console.error('Error submitting the form', error);
      setMessage('Failed to submit application. Please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gray-100 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Application Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Enter your name as on your identity documents</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name(s)"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Surname */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Enter your Surname as on your identity documents</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            placeholder="Surname"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Title</label>
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">-- Select Title --</option>
            <option value="Mr">Mr</option>
            <option value="Ms">Ms</option>
            <option value="Mrs">Mrs</option>
            <option value="Dr">Dr</option>
          </select>
        </div>

        {/* Marital Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Select your marital status</label>
          <select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">-- Select Marital Status --</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
          </select>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Enter your email address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Enter your mobile number in the format (+263XXXXXXXXX)</label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Mobile number"
            pattern="\+263\d{9}" // Validation pattern for mobile number format
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Enter your Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Select your gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">-- Select Gender --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Place of Birth */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Enter Place of Birth</label>
          <input
            type="text"
            name="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={handleChange}
            placeholder="Place of Birth"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Nationality */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Select your nationality</label>
          <select
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">-- Select Nationality --</option>
            <option value="Zimbabwean">Zimbabwean</option>
            <option value="South African">South African</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Country of Residency */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Select current country of residency</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">-- Select Country --</option>
            <option value="Zimbabwe">Zimbabwe</option>
            <option value="South Africa">South Africa</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Enter current city of residence</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Maiden Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Enter Maiden Name (if applicable)</label>
          <input
            type="text"
            name="maidName"
            value={formData.maidName}
            onChange={handleChange}
            placeholder="Maiden Name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* National ID */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Enter National Identification Number</label>
          <input
            type="text"
            name="nationalId"
            value={formData.nationalId}
            onChange={handleChange}
            placeholder="National Identification Number"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Residential Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Enter your current residential address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Course Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Course</label>
          <select
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select Course</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Business Administration">Business Administration</option>
            {/* Add more courses here */}
          </select>
        </div>

        {/* PDF File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Supporting Documents (PDF)</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Other fields remain the same... */}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Application
          </button>
        </div>
      </form>
      {message && <p className="text-center mt-4 text-green-500">{message}</p>}
    </div>
  );
};

export default ApplicationForm;
