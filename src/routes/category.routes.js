import { Router } from "express"


import {getCategory,
        getCategorys,
        createCategory,
        putCategory,
        deleteCategory} from "../controllers/category.controller.js";

const router = Router();




router.get ('/categorys', getCategorys);
router.get ('/categorys/:id', getCategory);

//?base de datos de origen no permite realizar ninguna otra consulta que no sea tipo GET
router.post ('/categorys', createCategory);
router.put ('/categorys', putCategory );
router.delete ('/categorys', deleteCategory);

export default router 