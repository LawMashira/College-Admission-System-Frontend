import React, { useState } from 'react';
import axios from 'axios';

const CourseForm: React.FC = () => {
  const [courseData, setCourseData] = useState({
    name: '',
    department: '',
    description: '',
  });

  const [message, setMessage] = useState('');

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/courses/create', courseData);
      console.log('Course created successfully', response.data);
      setMessage('Course created successfully!');
      setCourseData({
        name: '',
        department: '',
        description: '',
      });
    } catch (error) {
      console.error('Error creating course', error);
      setMessage('Failed to create course. Please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Course</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Course Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Course Name</label>
          <input
            type="text"
            name="name"
            value={courseData.name}
            onChange={handleChange}
            placeholder="Enter course name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Department */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Department</label>
          <input
            type="text"
            name="department"
            value={courseData.department}
            onChange={handleChange}
            placeholder="Enter department name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Course Description</label>
          <textarea
            name="description"
            value={courseData.description}
            onChange={handleChange}
            placeholder="Enter course description"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            rows={4}
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create Course
          </button>
        </div>
      </form>

      {message && <p className="text-center mt-4 text-green-500">{message}</p>}
    </div>
  );
};

export default CourseForm;
