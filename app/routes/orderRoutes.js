import {Router} from 'express'
import { addOrder, getOrder, getOrders, updateStatus } from '../controllers/OrderControllers.js'


const router = Router()

router.post('/addOrder', addOrder)
router.get('/getOrders', getOrders)
router.get('/getOrder/:id', getOrder)
router.put('/status/:id', updateStatus)

export default router