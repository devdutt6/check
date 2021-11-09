const crypto = require('crypto');
exports.securePassword = (plainpassword , salt) => {
    return crypto.createHmac('sha256' , salt)
            .update(plainpassword)
            .digest('hex')
}