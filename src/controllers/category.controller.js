import {pool} from '../db.js'


export const getCategory = async (req, res) => {
    const result = await pool.query("SELECT * FROM category")
    res.json(result[0])
};
    
    //consultar todos los productos
export const getProductCategor = async (req, res) => {
    const [rows] = await pool.query ("SELECT * FROM product")
        res.json(rows)
};


export const getProductCategory = async (req,res) => {
    const [rows] = await pool.query ("SELECT * FROM product WHERE category = ?" , [req.params.id])
    if (rows.length <= [0]) 
    return res.status(404).json({message: 'category dont found'})
    res.json(rows)
};



//? database no permite crear o hacer ninguna otro peticion ala bace de datos de origen
//?solo puras consultas GET


export const createCategory  = (req,res ) => res.send ('crear categorias');

// async (req,res ) => 
// { 
//     const {name} = req.body
//     const [rows] = await pool.query('INSERT INTO category (name) VALUES (?)', [name])
// res.send({rows})
// };




//actualizar producto 

export const putCategory  = (req,res ) => res.send ('actuializando categorias');
//eliminar producto 
export const deleteCategory  =(req,res ) => res.send ('eliminando categorias');