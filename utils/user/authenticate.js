const { securePassword } = require('./securePassword');

exports.authenticate = (plainpassword , e_password ,salt) => {
    let e_pass = securePassword(plainpassword , salt);
    if(e_pass === e_password) {
        return true;
    }else{
        return false;
    }
}