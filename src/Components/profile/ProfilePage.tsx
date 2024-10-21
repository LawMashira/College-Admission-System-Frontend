import React, { useState, useEffect } from "react";
import axiosInstance from "../../api/axiosInstance"; // Import your axios instance

interface UserProfile {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  profilePicture?: string; // Base64 for display
  coverPhoto?: string; // Base64 for display
}

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<UserProfile>({
    id: 2, // This should be dynamic (e.g., retrieved from user authentication)
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(
    null
  );
  const [coverPhotoUrl, setCoverPhotoUrl] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [profilePictureFile, setProfilePictureFile] = useState<File | null>(
    null
  );
  const [coverPhotoFile, setCoverPhotoFile] = useState<File | null>(null);

  useEffect(() => {
    // Fetch user profile from the backend
    const fetchUserProfile = async () => {
      try {
        const response = await axiosInstance.get(`/profile/${user.id}`);
        setUser(response.data);
        if (response.data.profilePicture) {
          setProfilePictureUrl(
            `data:image/jpeg;base64,${response.data.profilePicture}`
          );
        }
        if (response.data.coverPhoto) {
          setCoverPhotoUrl(`data:image/;base64,${response.data.coverPhoto}`);
        }
      } catch (error) {
        console.error("Error fetching profile data", error);
      }
    };

    fetchUserProfile();
  }, [user.id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      if (name === "profilePicture") {
        setProfilePictureFile(files[0]);
      } else if (name === "coverPhoto") {
        setCoverPhotoFile(files[0]);
      }
    }
  };

  const handleSaveProfile = async () => {
    try {
      const formData = new FormData();
      formData.append("firstName", user.firstName);
      formData.append("lastName", user.lastName);
      formData.append("email", user.email);
      formData.append("phone", user.phone);
      formData.append("address", user.address);
      formData.append("city", user.city);
      formData.append("state", user.state);
      formData.append("zipCode", user.zipCode);

      if (profilePictureFile) {
        formData.append("profilePicture", profilePictureFile);
      }
      if (coverPhotoFile) {
        formData.append("coverPhoto", coverPhotoFile);
      }

      await axiosInstance.put(`/profile/${user.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setIsEditing(false);
      alert("Profile updated successfully");
    } catch (error) {
      console.error("Error saving profile", error);
      alert("Failed to save profile");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-white shadow-lg rounded-lg p-6">
          <div className="relative">
            {coverPhotoUrl ? (
              <img
                src={coverPhotoUrl}
                alt="Cover"
                className="w-full h-64 object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-64 bg-gray-300 rounded-lg" />
            )}
            <div className="absolute bottom-[-50px] left-6 rounded-full border-4 border-white">
              {profilePictureUrl ? (
                <img
                  src={profilePictureUrl}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover"
                />
              ) : (
                <div className="w-32 h-32 bg-gray-400 rounded-full" />
              )}
            </div>
          </div>

          {isEditing && (
            <>
              <div className="mt-6">
                <label className="block text-gray-700">
                  Upload Profile Picture
                </label>
               
                <input
                  type="file"
                  name="profilePicture"
                  accept="image/jpeg, image/png, image/gif" // Accept multiple image formats
                  onChange={handleFileChange}
                  className="w-full mt-2"
                />
              </div>

              <div className="mt-6">
                <label className="block text-gray-700">
                  Upload Cover Photo
                </label>
             
                <input
                  type="file"
                  name="coverPhoto"
                  accept="image/jpeg, image/png, image/gif" // Accept multiple image formats
                  onChange={handleFileChange}
                  className="w-full mt-2"
                />
              </div>
            </>
          )}

          <div className="mt-16 ml-6">
            <h1 className="text-3xl font-bold">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>

        <div className="mt-6 bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold">Personal Information</h3>
          <div className="mt-4">
            {isEditing ? (
              <>
                <label className="block">First Name</label>
                <input
                  name="firstName"
                  value={user.firstName}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg mt-2"
                />
                <label className="block mt-4">Last Name</label>
                <input
                  name="lastName"
                  value={user.lastName}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg mt-2"
                />
                <label className="block mt-4">Email</label>
                <input
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg mt-2"
                />
                <label className="block mt-4">Phone</label>
                <input
                  name="phone"
                  value={user.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg mt-2"
                />
                <label className="block mt-4">Address</label>
                <input
                  name="address"
                  value={user.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg mt-2"
                />
                <label className="block mt-4">City</label>
                <input
                  name="city"
                  value={user.city}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg mt-2"
                />
                <label className="block mt-4">State</label>
                <input
                  name="state"
                  value={user.state}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg mt-2"
                />
                <label className="block mt-4">Zip Code</label>
                <input
                  name="zipCode"
                  value={user.zipCode}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg mt-2"
                />
              </>
            ) : (
              <>
                <p>
                  <strong>First Name:</strong> {user.firstName}
                </p>
                <p>
                  <strong>Last Name:</strong> {user.lastName}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Phone:</strong> {user.phone}
                </p>
                <p>
                  <strong>Address:</strong> {user.address}
                </p>
                <p>
                  <strong>City:</strong> {user.city}
                </p>
                <p>
                  <strong>State:</strong> {user.state}
                </p>
                <p>
                  <strong>Zip Code:</strong> {user.zipCode}
                </p>
              </>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          {isEditing ? (
            <button
              onClick={handleSaveProfile}
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Save Profile
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
