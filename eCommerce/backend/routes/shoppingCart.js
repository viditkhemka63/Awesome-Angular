var express = require('express');
var router = express.Router();
var ShoppingCart = require('../model/shoppingCart');

/* GET home page. */
router.post('/creatItem', function(req, res, next) {
    console.log(req.body)

    ShoppingCart.findOne({userId: req.body.userId, productId: req.body.productId}, (err, item) => {
        if(err) throw err;

        console.log(item);
        if(item) {
            // update it
            console.log('update executed');
            console.log(item.productCount);
            var count = item.productCount + req.body.val;
            console.log('count is '+ count);
            ShoppingCart.findByIdAndUpdate(  item._id, 
                                            {productCount: count } , 
                                            {new: true}, (err, data ) => {
                console.log(data);
                res.json(data);
            })
        } else {
            // create new item

            var cartItem = new ShoppingCart({
                userId: req.body.userId,
                productId: req.body.productId
            });
        
            cartItem.save((err, item) => {
                if(err) throw err;
        
                res.json(item);
            });
        }
    })

    
});

router.post('/findOne', (req, res) => {
    ShoppingCart.findOne({userId: req.body.userId, productId: req.body.productId}, (err, item) => {
        if(err) throw err;

        if(item) {
            res.json(item);
        } else {
            res.sendStatus(404);
        }
    })
}); 

router.get('/getAll/:userId', (req, res) => {
    ShoppingCart.find({userId: req.params.userId}, (err, data) => {
        if(err) throw err;

        res.json(data);
    })
})


module.exports = router;
