import express from 'express';
import { userById } from '../controllers/user'
import { add, list, read, remove, update } from '../controllers/product';
import { isAdmin, isAuth, requireSignin } from '../middlewares/checkAuth';

const router = express.Router()
router.get('/product', list)
router.get('/product/:id', read)
router.post('/product/:userId', requireSignin, isAuth, isAdmin, add)
router.delete('/product/:id', remove)
router.patch('/product/:id', update)

router.param("userId", userById)

export default router;