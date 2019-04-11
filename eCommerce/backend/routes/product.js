var express = require('express');
var router = express.Router();
var Product = require('../model/product');

/* GET home page. */
router.get('/getAll', function(req, res) {
    Product.find({},(err, data) => {
        if(err) throw err;

        res.json(data);
    })    
});


router.post('/create', (req, res) => {

    console.log(req.body);
    
    var product = new Product({
        name: req.body.name,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
        description: req.body.description
    });

    product.save((err, data) => {
        if(err) throw err;

        if(data) {
            res.json(data);
        } else {
            res.json({message: 'Unable to create product'});
        }
    })
})

router.post('/update', (req, res) => {
    console.log('update in product execute');
    res.json({message: 'product update method is under development'});
})

module.exports = router;
