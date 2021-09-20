import { Router } from 'express';
import { createAUser } from '../resources/user/controller';

import { loginUser, logOutUser } from './controller';

const router = Router();

router.route('/login').post(loginUser);
router.route('/logout').get(logOutUser);
router.route('/signup').post(createAUser);

export default router;
