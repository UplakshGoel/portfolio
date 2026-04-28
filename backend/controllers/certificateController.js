import { getAllCertificates } from '../models/Certificate.js';
import { sendSuccess, sendError } from '../views/responseView.js';

export const getCertificates = (_req, res) => {
  try {
    const certificates = getAllCertificates();
    sendSuccess(res, certificates, 'Certificates retrieved successfully');
  } catch (error) {
    sendError(res, 500, 'Failed to retrieve certificates');
  }
};
