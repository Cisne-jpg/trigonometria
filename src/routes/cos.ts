import { Router } from 'express';
import { cosController } from '../controllers/cos.controllers';

const router = Router();
router.get('/:id', cosController);
export default router;