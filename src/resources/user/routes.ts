import { Router } from 'express';
import { createAUser, getAllUsers } from './controller';

const router = Router();

router.post('/signup', createAUser);
router.get('/', getAllUsers);

export default router;
