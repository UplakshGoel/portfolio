import { getAllProjects, getProjectById, getFeaturedProjects } from '../models/Project.js';
import { sendSuccess, sendError } from '../views/responseView.js';

export const getProjects = (req, res) => {
  try {
    const { featured } = req.query;
    const projects = featured === 'true' ? getFeaturedProjects() : getAllProjects();
    sendSuccess(res, projects, 'Projects retrieved successfully');
  } catch (error) {
    sendError(res, 500, 'Failed to retrieve projects');
  }
};

export const getProject = (req, res) => {
  try {
    const project = getProjectById(req.params.id);
    if (!project) return sendError(res, 404, 'Project not found');
    sendSuccess(res, project, 'Project retrieved successfully');
  } catch (error) {
    sendError(res, 500, 'Failed to retrieve project');
  }
};
