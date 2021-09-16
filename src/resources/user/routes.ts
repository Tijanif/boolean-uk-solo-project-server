import { Router } from 'express';
import { createAUser, getAllUsers, getAUserById } from './controller';

const router = Router();

// router.post('/signup', createAUser);
router.get('/', getAllUsers);
router.get('/:id', getAUserById);

export default router;
