import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);
export default router;


/*
store = create user -> POST
index = list users -> GET
show = show user -> GET
update = update user -> PATH OR PUT
destroy = delete user -> DELETE
*/
