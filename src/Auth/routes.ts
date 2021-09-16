import { Router } from 'express';
import { createAUser } from '../resources/user/controller';

// import { loginUser, logOutUser } from './controller';

const router = Router();

// router.route('/login').post(loginUser);
// router.route('/logout').post(logOutUser);
router.route('/signup').post(createAUser);

export default router;
