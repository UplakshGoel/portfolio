import { createContact } from '../models/Contact.js';
import { sendSuccess, sendError } from '../views/responseView.js';

export const submitContact = (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return sendError(res, 400, 'Name, email, and message are all required');
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return sendError(res, 400, 'Please provide a valid email address');
    }

    const contact = createContact({ name, email, message });
    sendSuccess(res, contact, 'Message sent successfully!', 201);
  } catch (error) {
    sendError(res, 500, 'Failed to send message');
  }
};
