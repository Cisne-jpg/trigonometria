import { Router } from 'express';
import { sinController } from '../controllers/sin.controller';

const router = Router();
router.get('/:id', sinController);
export default router;