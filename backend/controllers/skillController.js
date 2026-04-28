import { getAllSkills, getSkillsByCategory } from '../models/Skill.js';
import { sendSuccess, sendError } from '../views/responseView.js';

export const getSkills = (req, res) => {
  try {
    const { category } = req.query;
    const skills = category ? getSkillsByCategory(category) : getAllSkills();
    sendSuccess(res, skills, 'Skills retrieved successfully');
  } catch (error) {
    sendError(res, 500, 'Failed to retrieve skills');
  }
};
