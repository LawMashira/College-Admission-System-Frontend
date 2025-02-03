import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


interface Course {
  id: number;
  name: string;
  department: string;
  description: string;
}

const ApplicantDashboard: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [applicationData, setApplicationData] = useState({
    name: '',
    surname: '',
    email: '',
    mobileNumber: '',
    dateOfBirth: '',
    courseId: 0,
  });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://school-admission-system-production.up.railway.app/api/courses');
        setCourses(response.data);
      } catch (error) {
        //console.error('Error fetching courses:', error);
        toast.error('Failed to fetch courses');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleApplyClick = (course: Course) => {
    setSelectedCourse(course);
    setApplicationData({ ...applicationData, courseId: course.id }); // Set the selected course ID
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setApplicationData({ ...applicationData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/applications', applicationData);
      toast.success('Application submitted successfully!');
      console.log(response.data); // Optionally log the response data
      setSelectedCourse(null); // Reset selected course
      setApplicationData({ name: '', surname: '', email: '', mobileNumber: '', dateOfBirth: '', courseId: 0 });
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('Failed to submit application');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 bg-gray-100 ">
      <h1 className="text-2xl font-bold mb-4">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {courses.map(course => (
          <div key={course.id} className="border p-4 rounded shadow h-">
            <p className="text-2xl font-semibold"> Course: {course.name}</p>
            
            <p>Department: {course.department}</p>
            <p>Description: {course.description}</p>
            <button
              onClick={() => handleApplyClick(course)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded "
            >

<a href="/apply">Apply Now</a>
            </button>
          </div>
        ))}
         
      </div>

      {selectedCourse && (
        <div className="mt-6 p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">Apply for {selectedCourse.name}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block">Name:</label>
              <input
                type="text"
                name="name"
                value={applicationData.name}
                onChange={handleInputChange}
                required
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block">Surname:</label>
              <input
                type="text"
                name="surname"
                value={applicationData.surname}
                onChange={handleInputChange}
                required
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block">Email:</label>
              <input
                type="email"
                name="email"
                value={applicationData.email}
                onChange={handleInputChange}
                required
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block">Mobile Number:</label>
              <input
                type="text"
                name="mobileNumber"
                value={applicationData.mobileNumber}
                onChange={handleInputChange}
                required
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block">Date of Birth:</label>
              <input
                type="date"
                name="dateOfBirth"
                value={applicationData.dateOfBirth}
                onChange={handleInputChange}
                required
                className="border p-2 w-full"
              />
            </div>
            <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
              Submit Application
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ApplicantDashboard;
