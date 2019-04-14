var express = require('express');
var router = express.Router();
var User = require('../model/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',(req,res) =>{
    User.findOne({email: req.body.email}, (err, user) => {
      console.log(user);

      if(user){
         if(user.validatePassword(req.body.password)){
           res.json(user.toAuthJSON());
         }else{
           res.sendStatus(401);
         }
      } else{
        res.sendStatus(404);
      }
    })   
})

router.post('/create', (req,res) => {
   
   User.findOne({email: req.body.email} , (err, data) => {
     if(err) throw err;

     if(data){
      res.json({message: 'User already exists'});
     }else{
      var user = new User();
      user.email = req.body.email;
      user.setPassword(req.body.password);
      user.save((err, user) => {
        if(err) throw err;
   
         console.log(user);
         if(user){
           res.json(user);
         } else{
           res.json({message: 'User already exists'});
         }
   
      })
     }
   })
})

router.get('/getall',(req,res) => {
   User.find({},(err,users) => {
     if(err) throw err;

     if(users) {
      res.json(users);
     } else{
       res.sendStatus(404)
     }
   })
})

module.exports = router;
