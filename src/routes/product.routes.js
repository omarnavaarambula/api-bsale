import { Router } from "express"
import {createProduct, 
        deleteProduct, 
        putProduct, 
        getProducts, 
        getProduct} from '../controllers/product.controller.js'
const router = Router();



// consultar productos por ID
router.get ('/products', getProducts);
router.get ('/products/:id', getProduct);

//?base de datos de origen no permite realizar ninguna otra consulta que no sea tipo GET
router.post ('/products', createProduct);
router.put ('/products', putProduct );
router.delete ('/products', deleteProduct);

export default router 