import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', userController.index); // List users
router.get('/:id', userController.show); // List user

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);


export default router;


/*
store = create user -> POST
index = list users -> GET
show = show user -> GET
update = update user -> PATH OR PUT
destroy = delete user -> DELETE
*/
