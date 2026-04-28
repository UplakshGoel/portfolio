import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export const fetchProjects = () => API.get('/projects');
export const fetchFeaturedProjects = () => API.get('/projects?featured=true');
export const fetchProject = (id) => API.get(`/projects/${id}`);
export const fetchSkills = () => API.get('/skills');
export const fetchCertificates = () => API.get('/certificates');
export const submitContactForm = (data) => API.post('/contact', data);

export default API;
