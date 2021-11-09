const mongoose = require('mongoose');
const { v4:uuidv4 } = require('uuid');

const UserSchema = new mongoose.Schema({
    email: String,
    e_password: String,
    salt: {
        type: String,
        default: uuidv4()
    },
    active: {
        type: Boolean,
        default: true
    },
    name: String,
    bio: String,
    twitter: String,
    profilePhoto: String,
    nft: [
        _id= false,
        {
            nftLink: String,
            title: String,
            price: Number,
            royalty: Number,
            attributeName: String,
            attributeValue: Number,
            description: String
        }
    ]
});


const User = mongoose.model("User" , UserSchema);

module.exports = { User };