import { Router } from 'express';
import { getCertificates } from '../controllers/certificateController.js';

const router = Router();

router.get('/', getCertificates);

export default router;
