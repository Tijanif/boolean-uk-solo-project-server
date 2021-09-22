import { Router } from 'express';
import { createAPerson, getAllPerson, getAPersonById } from './controller';

const router = Router();

router.post('/create', createAPerson);
router.get('/', getAllPerson);
router.get('/:id', getAPersonById);

export default router;
