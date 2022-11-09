// import express from 'express'

// import categoryRoutes from './routes/category.routes.js'
// import productRoutes from './routes/product.routes.js'
// import {PORT} from './config.js'

// const app = express();




// app.use(express.json());
// app.use('/api/v1/',categoryRoutes);
// app.use('/api/v1/', productRoutes);


import app from './app.js'
import {PORT} from './config.js'


app.listen(PORT);
console.log ('Server running on port ', PORT);