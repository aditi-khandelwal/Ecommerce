const {mongoose} = require('../server'),
    timestamp = require('mongoose-timestamp');


const CategorySchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    description : {
        type: String,
        required : true
    }
},{collection: 'Category'});


CategorySchema.plugin(timestamp);


module.exports = {
    Category : mongoose.model('Category',CategorySchema)
};