/*
const cosmetics = [
    { id: 1000, name : 'Eyeliner', brand : 'Maybelline', price: 9.00, publisher : 2000},
    { id: 1001, name : 'Lipstick', brand : 'Maybelline', price: 6.00, publisher : 2000},
    { id: 1002, name : 'Loose powder', brand : 'Ponds', price: 4.00, publisher : 2001},
    { id: 1003, name : 'Eyeliner', brand : 'Etude House', price: 8.00, publisher : 2002},
]

module.exports = cosmetics;
*/

let mongoose = require('mongoose');

let CosmeticsSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    publisher: String,
    release_date: Date,
    //img_url:
},
    {collection: 'cosmetics'});

module.exports = mongoose.model('Cosmetic', CosmeticsSchema);