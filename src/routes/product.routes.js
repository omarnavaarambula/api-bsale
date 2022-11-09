import { Router } from "express"
import {createProduct, deleteProduct, putProduct, getProduct, getProduc} from '../controllers/product.controller.js'

const router = Router();



// consultar productos por ID
router.get ('/product', getProduct);
router.get ('/product/:id', getProduc);
router.post ('/product', createProduct);
router.put ('/product', putProduct );
router.delete ('/product', deleteProduct);
export default router 