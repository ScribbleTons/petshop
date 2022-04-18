const userModel = require('../models/user')
module.exports = function authorizeAdmin(req, res, next) {

    if (req.user.role === "admin") {
        next()
    } else {
        res.status(401).send("You don't have the privileges to perform this operation.")
    }

}