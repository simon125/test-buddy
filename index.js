const express = require('express');
const cors = require('cors');
const helmet = require('helmet');



const sum = require('./sum');


const app = express();

app.use(cors())
app.use(helmet())

const PORT = process.env.PORT || 5000;

app.get('/', (req,res)=>{
    res.status(200).json({msg: 'success'})
})

app.get('/test', (req,res)=>{
    res.status(200).json({msg: 'test', sum: sum(1,2)})
})


console.log(123);

app.listen(PORT, ()=>{
    console.log('works')
})


