import {Router} from 'express'
import upload from '../../config/multerConfig.js';
import { addProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/ProductControllers.js'

const router = Router()

router.post('/addProduct', upload.single('picture'), addProduct);

router.get('/getProducts', getProducts)
router.delete('/deleteProduct/:id', deleteProduct)
router.put('/updateProduct/:id', updateProduct)
router.get('/getProduct/:id', getProduct)

export default router