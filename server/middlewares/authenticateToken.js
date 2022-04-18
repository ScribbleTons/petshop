const jwt = require("jsonwebtoken");
module.exports = function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    if (!authHeader) return res.sendStatus(400)
    const [, token] = authHeader && authHeader.split(" ");

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.SECURITY_KEY, (err, user) => {

        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};