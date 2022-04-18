const express = require("express");
const cleaner = require("../util/cleanerFn");
const router = express.Router();
const userModel = require("../models/user");
const crypto = require("../util/encryptionDecryption");
const authenticateToken = require("../middlewares/authenticateToken");
const authorizeAdmin = require('../middlewares/authorizeUser')

router.get("/", authenticateToken, authorizeAdmin, async function(req, res) {
    try {
        const users = await userModel.find({}, { password: 0 }).limit(20);
        if (!users) {
            return res.status(200).json({ message: "No user in database", data: [] });
        }
        res.status(200).json({ message: "success fetched users", data: users });
    } catch (error) {
        res.status(500).end("Error while getting users");
    }
});

router.get("/:id", authenticateToken, async function(req, res) {

    try {

        const id = req.params.id;
        const user = await userModel.find({ _id: id }, { password: 0 });

        if (user.length <= 0) {
            res.status(400).json({ message: "invalid user id" })
            return
        }
        res
            .status(200)
            .json({
                message: "successful",
                data: user,

            });

    } catch (error) {
        res.status(400).json({ message: "no user with the id found" });
    }
})
router.put("/:id", authenticateToken, async(req, res) => {


    const name = cleaner(req.body.name);
    const password = cleaner(req.body.password);

    if (name && password) {
        try {
            const id = req.params.id;
            const userData = {
                name,
                password: crypto.encryptData(password),
                modifiedAt: Date.now()
            };
            const user = await userModel.updateOne({ _id: id }, userData);
            res.status(200).send({ message: "successfully updated", data: user });
        } catch (error) {
            res.status(400).send({
                message: "Fail",
                Error: "User with this id can't be found",
            });
        }
    } else {
        res.status(400).send({ message: "Field invalid" });
    }
});
router.delete("/:id", authenticateToken, async(req, res) => {
    try {
        const id = req.params.id;
        await userModel.deleteOne({ _id: id })
        res.status(200).json({ message: "Successfully deleted" })
    } catch (error) {
        res.status(500).send({ message: "Unable to delete this user" })
    }

});

module.exports = router;