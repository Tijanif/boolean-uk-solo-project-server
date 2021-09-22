import { Router } from 'express';
import { createAnExpense, getAlExpenses, getExpenseById } from './controller';

const router = Router();

router.post('/create', createAnExpense);
router.get('/', getAlExpenses);
router.get('/:id', getExpenseById);

export default router;
