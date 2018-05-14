const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const route = require('./server/routes/routes');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use('/',route);

const PORT = 8081;

app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);
});