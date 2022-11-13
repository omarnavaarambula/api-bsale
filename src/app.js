import express from 'express'
import cors from 'cors'

import categoryRoutes from './routes/category.routes.js'
import productRoutes from './routes/product.routes.js'

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/v1/',categoryRoutes);
app.use('/api/v1/', productRoutes);
app.use("/", (req,res) => {
    res.send("Welcome the bsale API Route Page is https://bsale-app-js.herokuapp.com/api/v1/categorys or https://bsale-app-js.herokuapp.com/api/v1/products ")
})
export default app;