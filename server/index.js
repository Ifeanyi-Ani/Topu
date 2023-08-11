import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import postRoutes from './routes/postRoutes.js';

const app = express();
// const CON_STR= 'mongodb+srv://iani155:EmmanueL15@cluster0.gzxv1we.mongodb.net/?retryWrites=true&w=majority';
const CON_LOCAL='mongodb://localhost:27017/5000'
const PORT= process.env.PORT || 5000
app.use(cors())
app.use(bodyParser.json({limit:'30mb', extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb', extended:true}))

app.use('/api/v1/posts', postRoutes)
mongoose.connect(CON_LOCAL, {useUnifiedTopology:true,useNewUrlParser:true});
mongoose.connection.on('open', ()=> console.log('server is connected'))
mongoose.connection.on('error',(error)=>console.log(error))

app.listen(PORT, ()=>console.log('App is running'))