const express = require("express");
const router = express.Router();
const data=require('./data')

router.get("/", (req, res, next) => {
    const messagesHTML = data.map(item => `<p>${item}</p>`).join('');

  res.send(
    `<form  action="/"  onSubmit="document.getElementById('username').value=localStorage.getItem('username')"method="POST">
    <input id="message" placeholder= "message" type="text" name="message">
    <input type="hidden" name="username" id="username">
    <button type="submit">send</button>
    </form>
    <div>${messagesHTML}</div>`
  );

});
router.post('/',(req,res,next)=>{
    data.push(`{${req.body.username}:${req.body.message}}`)
    console.log(data)
    console.log(`${req.body.username}:${req.body.message}`)
    res.redirect('/');
      })



module.exports = router;
