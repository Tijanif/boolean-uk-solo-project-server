import { Router } from 'express';
import { createAUser } from './controller';

const router = Router();

router.post('/signup', createAUser);

export default router;
