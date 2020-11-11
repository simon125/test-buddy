const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');


const sum = require('./sum');


const app = express();

app.use(cors())
app.use(helmet())

const PORT = process.env.PORT || 5000;

app.get('/api', (req,res)=>{
    res.status(200).json({msg: 'success'})
})

app.get('/test', (req,res)=>{
    res.status(200).json({msg: 'test', sum: sum(1,2)})
})


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/build'));
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
    );
  }

app.listen(PORT, ()=>{
    console.log('works')
})


