const express = require('express')

const app = express ();

//Routes 

app.use('/', reuquire('./routes/index'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log('Server started on port 3000'));