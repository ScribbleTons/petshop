// crypto module
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const fs = require("fs");

/**encrypt the message
 * @param message to be enctypted
 * @return hashed string
 */
let encryptData = (content) => {
    return crypto
        .pbkdf2Sync(content, process.env.SECURITY_KEY, 1000, 64, `sha512`)
        .toString("hex");
};

/**
 * @TODO Not working appropriately yet
 * @param encryptedMessage String
 * @returns readable string
 */
let decryptData = (encryptedMessage) => {
    // the decipher function
    const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);

    let decryptedData = decipher.update(encryptedMessage, "hex", "utf-8");

    decryptedData += decipher.final("utf8");
    console.log(decryptedData, "ddd");
    return decryptedData;
};

function generateAccessToken(data) {
    return jwt.sign(
        data, process.env.SECURITY_KEY
    );
}


module.exports = {
    encryptData,
    decryptData,
    generateAccessToken,

};