import { Router } from 'express';
import { UserController } from './user.controller';

const router = Router();
router.post('/create-user', UserController.createUser);
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getSingleUser);
export const UserRoutes = router;
