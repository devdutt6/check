const { User } = require('../modules/user');
// const { NFT } = require('../modules/NFT');


exports.createNFT = async (req,res) => {
    try{
        const email = req.email;
        const { nftLink , title , price , royalty ,attributeName , attributeValue , description } = req.body;
        const result = await User.findOne({email: email});
        // const newNft = new NFT();

        if(!result){
            return res.status(402).json({
                "message": "sign in again"
            });
        }
        // newNft.nftLink = nftLink;
        // newNft.title = title;
        // newNft.price = price;
        // newNft.royalty = royalty;
        // newNft.attributeName = attributeName;
        // newNft.attributeValue = attributeValue;
        // newNft.description = description;
        // newNft.owner = owner;

        result.nft.push({
            nftLink : nftLink,
            title : title,
            price : price,
            royalty : royalty,
            attributeName : attributeName,
            attributeValue : attributeValue,
            description : description,
        })

        // const rev = await newNft.save();
        const reva = await result.save();

        // if(!rev){
        //     return res.status(500).json({
        //         "message":"Could not upload NFT try again"
        //     });
        // }
        if(!reva){
            return res.status(500).json({
                "message":"Could not upload NFT try again"
            });
        }
        return res.status(200).json({
            "message":"Uploaded NFT",
            "data": reva
        });

    }catch(err){
        console.log(err.message, err.stack);
        return res.status(500).json({
            "message":"Internal Server update"
        });
    }
}

exports.UploadNFT = async (req,res) => {
    try{
        var locfile = req.file.location;

        if(locfile != null || locfile != "undefined"){
            return res.status(200).json({
                "message":"NFT Uploaded",
                "link": locfile
            });
        }
    }catch(err){
        console.log(err.message);
        return res.status(500).json({
            "message":"Internal Server UploadNFT"
        });
    }
}