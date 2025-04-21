import { Router } from 'express';
import { getTan } from '../handlers/trigHandler';

const router = Router();
router.get('/', getTan);
export default router;
