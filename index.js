const express = require('express');
const cors = require('cors');

const sum = require('./sum');


const app = express();

app.use(cors())

const PORT = process.env.PORT || 5000;

app.get('/', (req,res)=>{
    res.status(200).json({msg: 'success'})
})

app.get('/test', (req,res)=>{
    res.status(200).json({msg: 'test', sum: sum(1,2)})
})




app.listen(PORT, ()=>{
    console.log('works')
})


