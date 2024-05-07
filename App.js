const express=require('express');
const bodyParser=require('body-parser');

const app=express();
const loginRouter=require('./router/login')
const sendRouter=require('./router/send')
app.use(bodyParser.urlencoded({extended: false}));
app.use(loginRouter)
app.use(sendRouter)
app.listen(3000);