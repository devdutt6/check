const express = require('express');
const router = express.Router();
// const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');
const { isRefreshAuthenticated } = require('../utils/user/isAuthenticated');
const { isAuthenticated,isForgotAuthenticated,isVerifyAuthenticated } = require('../utils/user/isAuthenticated');
const { signUp,signIn,updateProfile,refreshAccess,verifyMail,forgotPasswordMail,changePasswordLink,changePassword,Upload } = require('../controllers/user');

router.post('/signUp' , signUp);
router.get('/verifyMail' , isVerifyAuthenticated , verifyMail);
router.post('/signIn' , signIn);
router.post('/updateProfile' , isAuthenticated , updateProfile);
router.post('/changePassword' , isAuthenticated , changePassword);
router.get('/refreshAccessToken' , isRefreshAuthenticated , refreshAccess);
router.post('/forgotPasswordMail' , forgotPasswordMail);
router.post('/changePasswordLink' , isForgotAuthenticated , changePasswordLink);

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_KEY_BUCKET,
    secretAccessKey: process.env.AWS_SECRET_BUCKET
});

var upload = multer({
    storage: multerS3({
          s3: s3,
          bucket: process.env.AWS_S3BUCKET,
          key: function (req, file, cb) {
                var orgName = file.originalname;
                let indexofdot = orgName.lastIndexOf('.');
                console.log("ori" ,file.originalname)
                let str = orgName.slice(indexofdot);
                cb(null, Date.now().toString() + str)
          },
          acl: 'public-read'
    })
});

router.post('/upload' , isAuthenticated , upload.single("file") , Upload);

module.exports = router;