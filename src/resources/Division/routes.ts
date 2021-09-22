import { Router } from 'express';
import { createADivision, getAllDivision } from './controller';

const router = Router();

router.post('/create', createADivision);
router.get('/', getAllDivision);

export default router;
