const express = require('express');
const multer = require('multer');
const router = express.Router();

const {Product} = require('../models/product');
const {Category} = require('../models/category');

// Multer Configuration
const Storage = multer.diskStorage({
    // destination
    destination: function (req, file, cb) {
      cb(null, './public/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

const upload = multer({ storage: Storage }); 

// Product Get and Add.
router.get('/product',(req,res) => {
    Product.find({}).populate('category_id').exec((err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

router.get('/product/:pId',(req,res) => {
    Product.find({_id: req.params.pId}).populate('category_id').exec((err,data) => {
        if(err) throw err;
        res.send(data);
    });
});


router.post("/addproduct", upload.array("uploads[]", 12), function (req, res) {
   let product = new Product({
        name : req.body.name,
        description : req.body.description,
        price : req.body.price,
        category_id : req.body.category_id,
        rating : req.body.rating,
        imageName : req.files[0].filename
    });

    product.save().then((doc) => {
        return res.send(doc);
    }, (e) => {
        return res.status(400).send(`Bad request ${e}`);
    });
});


router.delete('/product/:pId',(req,res) => {
    const id = req.params.pId;
    Product.remove({_id:id},(err) => {
        if(err) return handleError(err);
        Product.find({}).populate('category_id').exec((err,data) => {
            if(err) throw err;
            res.send(data);
        });
    });
});


router.put('/product/:pId', upload.array("uploads[]", 12) ,(req,res) => {
    console.log(req);
    console.log(req.files); 
    const id = req.params.pId;
    let product = {};
    if(req.body.name) product.name = req.body.name;
    if(req.body.description) product.description = req.body.description;
    if(req.body.price) product.price = req.body.price;
    if(req.body.category_id) product.category_id = JSON.parse(req.body.category_id);
    if(req.body.rating) product.rating = req.body.rating;
    if(req.files.length > 0) product.imageName = req.files[0].filename;
    console.log(product);
    update = {
        "$set": product 
    }
    Product.update({_id: id}, update, (err, data) => {
        if(err) throw err;
        // res.end(data);
        console.log(data);
        res.end('He;;p');
    });
});



// Category Get and Add.
router.get('/category',(req,res) => {
    Category.find({}, (err,data)=> {
        if(err) throw err;
        res.send(data);
    });
});


router.post('/addcategory', (req,res) => {
    let category = new Category({
        name : req.body.name,
        description : req.body.description
    });

    category.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(`Bad request ${e}`);
    });
});

module.exports = router;
