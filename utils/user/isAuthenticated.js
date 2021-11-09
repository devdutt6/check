const jwt = require('jsonwebtoken');

exports.isAuthenticated = async (req,res,next) => {
    try{
        const token = req.headers.authorization.split(' ');
        const decoded = await jwt.verify(token[1] , process.env.SECRET);
        if(!decoded){
            return res.status(402).json({
                "message":"error in Authentication verify"
            });
        }
        req.email = decoded.email;
        next();
    }catch(err){
        return res.status(500).json({
            "message":"Not authorized please sign in again"
        });
    }
}

exports.isRefreshAuthenticated = async (req,res,next) => {
    try{
        const token = req.headers.authorization.split(' ');
        const decoded = await jwt.verify(token[1] , process.env.REFRESH);
        if(!decoded){
            return res.status(402).json({
                "message":"error in Authentication refresh not authorized signin again"
            });
        }
        req.email = decoded.email;

        next();
    }catch(err){
        return res.status(500).json({
            "message":"Not authorized please sign in again"
        });
    }
}

exports.isVerifyAuthenticated = async (req,res,next) => {
    try{
        const token = req.headers.authorization.split(' ');
        const decoded = await jwt.verify(token[1] , process.env.VERIFYEMAIL);
        if(!decoded){
            return res.status(402).json({
                "message":"error in Authentication email verify"
            });
        }
        req.email = decoded.email;
        next();
    }catch(err){
        return res.status(500).json({
            "message":"Not authorized please sign in again"
        });
    }
}

exports.isForgotAuthenticated = async (req,res,next) => {
    try{
        const token = req.headers.authorization.split(' ');
        const decoded = await jwt.verify(token[1] , process.env.FORGOT);
        if(!decoded){
            return res.status(402).json({
                "message":"error in Authentication verify"
            });
        }
        req.email = decoded.email;
        next();
    }catch(err){
        return res.status(500).json({
            "message":"Not authorized please try again"
        });
    }
}