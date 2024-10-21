import axios from 'axios';

const API_URL = 'http://localhost:8080/admin/';

export const changeUserRole = (username: string, role: string) => {
  const token = localStorage.getItem('token');
  return axios.put(API_URL + `change-role/${username}?role=${role}`, {}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
