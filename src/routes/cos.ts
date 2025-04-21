import { Router } from 'express';
import { getCos } from '../handlers/trigHandler';

const router = Router();
router.get('/', getCos);
export default router;
