const express = require("express");
const router = express.Router();
const cleaner = require("../util/cleanerFn");
const userModel = require("../models/user");
const crypto = require("../util/encryptionDecryption");
const assert = require("assert");
/**
 * Sign in
 * @todo
 */

const signup = router.post("/signup", async(req, res, next) => {
    try {
        const body = req.body;
        const name = cleaner(body.name);
        const email = cleaner(body.email);
        const password = cleaner(body.password);
        const role = cleaner(body.role)

        const userId = await userModel.findOne({ email: email });
        if (userId) {
            throw Error("User already exists");
        }
        if (name && email && password) {
            const userData = {
                name,
                email,
                password: crypto.encryptData(password),
            };
            if (role) userData.role = role;
            const user = await userModel.create(userData);
            user.user_url = `/users/${user._id}`;
            user.save();

            res.status(200).send({ message: "successfully created", data: user });
        } else {
            res.status(400).send({
                message: `${
          !email ? "Email" : !password ? "Password" : !name ? "Name" : "All"
        } field required`,
            });
            return;
        }
    } catch (error) {
        res.status(400).send({
            message: "Failed",
            Error: error.message,
        });
    }
});

/**
 * sign up
 * @todo
 */

const signin = router.post("/signin", async(req, res, next) => {
    try {
        const email = cleaner(req.body.email);
        const password = cleaner(req.body.password);
        if (email && password) {
            const user = await userModel.findOne({ email: email });
            if (user) {
                let pwd = crypto.encryptData(password);

                if (user.password === pwd) {
                    let token = crypto.generateAccessToken(JSON.stringify({ email: email, role: user.role, id: user._id }));
                    res.status(200).json({ data: user, token });
                } else {
                    throw Error(
                        JSON.stringify({ code: 401, message: "Invalid password" })
                    );
                }
            } else {
                throw Error(
                    JSON.stringify({
                        code: 404,
                        message: "No user found with this email address",
                    })
                );
            }
        } else {
            throw Error(
                JSON.stringify({
                    code: 400,
                    message: "Invalid credential",
                })
            );
        }
    } catch (err) {
        // console.error(error.message)
        const error = JSON.parse(err.message);
        switch (error.code) {
            case "ETIMEOUT":
                res.status(500).json("Unable to connect to server");
                break;
            case 401:
                res.status(error.code).json({ message: error.message });
                break;
            case 400:
                res.status(error.code).json({ message: error.message });
                break;
            case 404:
                res.status(error.code).json({ message: error.message });
                break;
            default:
                res.status(500)
                    .json({ message: "Server error", Error: error._message });
        }
    }
});

/**
 * @description signout
 * @todo
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const signout = (req, res, next) => {

}
module.exports = { signin, signup };