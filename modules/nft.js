const mongoose = require('mongoose');

const NFTSchema = new mongoose.Schema({
    nft: {
        nftLink: String,
        title: String,
        price: Number,
        royalty: Number,
        attributeName: String,
        attributeValue: Number,
        description: String,
        owner: String,
        history: [
            _id= false,
            {
                from: String,
                to: String,
                value: Number
            }
        ]
    }
});


const NFT = mongoose.model("NFT" , NFTSchema);

module.exports = { NFT };