import Contact from '../models/Contact.js';
import { sendSuccess, sendError } from '../views/responseView.js';

export const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return sendError(res, 400, 'Name, email, and message are all required');
    }

    const contact = await Contact.create({ name, email, message });
    
    sendSuccess(res, contact, 'Message sent successfully!', 201);
  } catch (error) {
    console.error('Submit Contact Error:', error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return sendError(res, 400, messages.join(', '));
    }
    
    sendError(res, 500, 'Failed to send message');
  }
};

