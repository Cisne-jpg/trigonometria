import { Router } from 'express';
import { getSin } from '../handlers/trigHandler'; 

const router = Router();
router.get('/', getSin);
export default router;
