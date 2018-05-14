const {mongoose} = require('../server'),
    timestamp = require('mongoose-timestamp');


const ProductSchema = new mongoose.Schema({
    name : {
        type: String,
        // required : true
    },
    description : {
        type: String,
        // required : true
    },
    price : {
        type: Number,
        // required : true
    },
    category_id : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category',
        // required : true
    },
    rating : {
        type: Number,
        // required : false
    },
    imageName : {
        type : String,
        // required : true
    }
},{collection: 'Product'});


ProductSchema.plugin(timestamp);


module.exports = {
    Product : mongoose.model('Product',ProductSchema)
};