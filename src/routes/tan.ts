import { Router } from 'express';
import { tanController } from '../controllers/tan.controller';

const router = Router();
router.get('/:id', tanController);
export default router;