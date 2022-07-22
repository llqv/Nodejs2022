import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import cors from 'cors';

const app = express();

import routerAuth from './routes/user'
import routerProduct from './routes/product';
import routerCategory from './routes/category';

//middleware
app.use(express.json());
app.use('/api', routerProduct);
app.use('/api', routerCategory);
app.use('/api', routerAuth);
app.use(cors());

//connect db
mongoose.connect('mongodb://localhost:27017/17103', () => {
    console.log('Successfully')
})
app.listen(process.env.PORT, () => {
    console.log('Successful Connection, PORT ' + process.env.PORT)
})