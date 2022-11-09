import {pool} from '../db.js'



//mostrar productos
export const getProduct = async (req, res) => {
const result = await pool.query("SELECT * FROM product")
res.json(result[0])
};

export const getProduc = async (req,res) => {
    const [rows] = await pool.query ("SELECT * FROM product WHERE id = ?" , [req.params.id])
    if (rows.length <= [0]) 
    return res.status(404).json({message: 'Product dont found'})
    res.json(rows[0])
};

//crear producto
export const createProduct = (req,res ) => res.send ('creando productos'); 
//actualizar producto 

export const putProduct = (req,res ) => res.send ('actuializando productos');
//eliminar producto 
export const deleteProduct =(req,res ) => res.send ('eliminando productos');
