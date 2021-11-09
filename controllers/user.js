const jwt = require('jsonwebtoken');
const { securePassword } = require('../utils/user/securePassword');
const { authenticate } = require('../utils/user/authenticate');
require('dotenv').config();
const { User } = require('../modules/user');

exports.signUp = async ( req,res ) => {
    try{
        const { email ,password } = req.body;

        const result = new User();

        const salt = result.salt;
        result.email = email;
        result.e_password = securePassword(password , salt);

        const rev = await result.save();

        const payload = { email:email };
        const token = jwt.sign(payload , process.env.VERIFYEMAIL ,{ expiresIn: '1800s'} );

        // sendVerifyEmail(email ,token);
        return res.status(200).json({
            "message": "verification mail sent Successfully",
            "email":email,
            "token": token
        });
    }
    catch(err){
        console.error(err.message , err.stack);
        return res.status(402).json({
            "message" : "in catch of user signup"
        });
    }
}

exports.signIn = async ( req,res ) => {
    try{
        const { email ,password } = req.body;

        const result = await User.findOne({email: email });
        if(!result){
            return res.status(402).json({
                "message": "No such user exist"
            });
        }

        const salt = result.salt;
        const e_password = result.e_password;

        if(authenticate(password ,e_password ,salt )){
            const payload = { email:email };
            const access_token = jwt.sign(payload, process.env.SECRET , { expiresIn: '2h'});
            const refresh_token = jwt.sign(payload, process.env.REFRESH , { expiresIn: '2d'});
            return res.status(200).json({
                "message": "signed in",
                "tokens":{
                    access_token: access_token,
                    refresh_token: refresh_token
                }
            });
        }
        else{
            return res.status(401).json({
                "message": "Email and password does not match",
                "email":email
            });
        }

        return res.status(200).json({
            "message": "verification mail sent Successfully",
            "email":email
        });
    }
    catch(err){
        console.error(err.message , err.stack);
        return res.status(402).json({
            "message" : "in catch of user signup"
        });
    }
}

exports.verifyMail = async (req,res) => {
    try{
        const email = req.email;
        const result = await User.findOne({email:email});
        if(!result){
            return res.status(400).json({
                "message":"No such data exist"
            });
        }
        result.active = true;

        const reva = await result.save();

        if(!reva){
            return res.status(400).json({
                "message": "not verified try again"
            });
        }
        return res.status(200).json({
            "message":"User verified now"
        });
    }catch(err){
        console.log(err.message);
        return res.status(500).json({
            "message":"Internal Server verify email"
        });
    }
}

exports.refreshAccess = async (req,res) => {
    try{
        const email = req.email;
        var result = await User.findOne({email:email});
        if(!result){
            return res.status(402).json({
                "message": "sign in again or not authorized"
            });
        }
        const payload = { email:email };
        const token = jwt.sign(payload, process.env.SECRET ,{ expiresIn: '2h'});
        return res.status(200).json({
            "message":"access token refreshed!",
            "access_token": token
        });
    }catch(err){
        console.log(err.message);
        return res.status(500).json({
            "message":"Internal Server refreshaccess"
        });
    }
}

exports.forgotPasswordMail = async (req,res) => {
    try{
        const {email} = req.body;
        const result = await User.findOne({email:email}).lean();
        if(!result){
            return res.status(400).json({
                "message":"No such data exist"
            });
        }else{
        /*!add link here*/
        // var link =  `/${jwt.sign( { email:email, case_id:result.case_id } , process.env.FORGOT , { expiresIn: '2h'})}`;
            const payload = { email:email };
            const token = jwt.sign( payload , process.env.FORGOT , { expiresIn: '2h'});
            // VerifyEmail(email, result.name , 'changePasswordLink' ,token);
            return res.status(200).json({
                "message":"Email sent check your email to reset password",
                "token": token
            });
        }
    }catch(err){
        console.log(err.message);
        return res.status(500).json({
            "message":"Internal Server forgotpassmail"
        });
    }
}

exports.changePasswordLink = async (req,res) => {
    try{
        const email = req.email;
        const { newPassword } = req.body;
        const result = await User.findOne({email:email});
        const e_pass = securePassword(newPassword, result.salt);
        result.e_password = e_pass;
        const reva = await result.save();
        if(!reva){
            return res.status(400).json({
                "message":"Failed to update password"
            });
        }
        return res.status(200).json({
            "message":"password updated",
            "data": reva
        });

    }catch(err){
        console.log(err.message);
        return res.status(500).json({
            "message":"Internal Server getprofile"
        });
    }
}

exports.changePassword = async (req,res) => {
    try{
        const email = req.email;
        const { oldPassword, newPassword } = req.body;
        const result = await User.findOne({email:email});
        const e_passold = securePassword(oldPassword, result.salt);
        const e_passnew = securePassword(newPassword, result.salt);
        if( e_passold == result.e_password){
            result.e_password = e_passnew;
            var reva = await result.save();
            if(!reva){
                return res.status(400).json({
                    "message":"Failed to update password"
                });
            }
        }
        else{
            return res.status(401).json({
                "message":"password does not match enter current password"
            });
        }
        return res.status(200).json({
            "message":"password updated",
            "data": reva
        });

    }catch(err){
        console.log(err.message,err.stack);
        return res.status(500).json({
            "message":"Internal Server changepassword"
        });
    }
}

exports.updateProfile = async (req,res) => {
    try{
        const email = req.email;
        const { name ,bio ,twitter ,profilePhoto } = req.body;
        const result = await User.findOne({email: email});

        if(!result){
            return res.status(402).json({
                "message": "sign in again"
            });
        }
        result.name = name;
        result.bio = bio;
        result.twitter = twitter;
        result.profilePhoto = profilePhoto;

        const reva = await result.save();

        if(!reva){
            return res.status(500).json({
                "message":"Could not update try again"
            });
        }
        return res.status(200).json({
            "message":"updated profile",
            "data": reva
        });

    }catch(err){
        console.log(err.message, err.stack);
        return res.status(500).json({
            "message":"Internal Server update"
        });
    }
}

exports.Upload = async (req,res) => {
    try{
        var locfile = req.file.location;

        if(locfile != null || locfile != "undefined"){
            return res.status(200).json({
                "message":"Photo Uploaded",
                "link": locfile
            });
        }
    }catch(err){
        console.log(err.message);
        return res.status(500).json({
            "message":"Internal Server Upload"
        });
    }
}