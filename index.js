const express = require('express');


const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req,res)=>{
    res.status(200).json({msg: 'success'})
})



app.listen(PORT, ()=>{
    console.log('works')
})