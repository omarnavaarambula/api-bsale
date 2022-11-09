import { Router } from "express"


import { getProductCategory, getProductCategor,  getCategory, createCategory, putCategory,deleteCategory} from "../controllers/category.controller.js";
const router = Router();




router.get ('/category', getCategory);
router.get ('/category/products', getProductCategor);
router.get ('/category/products/:id', getProductCategory);
router.post ('/category', createCategory);
router.put ('/category', putCategory );
router.delete ('/category', deleteCategory);

export default router 