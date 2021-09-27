import { Router } from 'express';
import {
  createAnExpense,
  getAlExpenses,
  getExpenseById,
  UpdateExpenseById,
} from './controller';

const router = Router();

router.post('/create', createAnExpense);
router.get('/', getAlExpenses);
router.get('/:id', getExpenseById);
router.patch('/:id', UpdateExpenseById);

export default router;
