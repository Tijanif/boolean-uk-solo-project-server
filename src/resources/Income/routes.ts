import { Router } from 'express';
import { createAnIncome, getAllIncom, getIncomeById } from './controller';

const router = Router();

router.post('/create', createAnIncome);
router.get('/', getAllIncom);
router.get('/:id', getIncomeById);

export default router;
