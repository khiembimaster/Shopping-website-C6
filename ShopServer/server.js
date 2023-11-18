const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const app = require('./app');

console.log(process.env);

mongoose.connect(process.env.CONN_STR, {
    useNewUrlParser: true
}).then((connection) => {
    console.log('DB connection successful!');
}).catch((err) => {
    console.log('something wrong happened!');
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('server has started...');
})