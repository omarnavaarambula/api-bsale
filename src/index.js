import cors from 'cors'
import app from './app.js'
import {PORT} from './config.js'

app.use(cors());
app.listen(PORT);
console.log ('Server running on port ', PORT);
