import express from 'express';
import { add, list, read,remove,update } from '../controllers/product';


const router = express.Router()
router.get('/category', list)
router.get('/category/:id', read)
router.post('/category', add)
router.delete('/category/:id', remove)
router.patch('/category/:id', update)

export default router;