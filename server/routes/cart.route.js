const express = require("express");
const dogModel = require("../models/dog");

const router = express.Router();
const { authenticateToken } = require("../middlewares");

//get all items in cart
router.get("/", authenticateToken, (req, res) => {
  dogModel.find({ itemAddedBy: req.user.id }, function (err, cart) {
    if (err) res.status(500).send("Unable to retrieve cart items");
    res.status(200).json({ cart: cart });
  });
});

//add dog to cart
router.post("/", authenticateToken, async function (req, res, next) {
  try {
    let dog = null;
    if (Array.isArray(req.body.items)) {
      let items = req.body.items.map((item) => {
        item.itemAddedBy = req.user.id;
        return item;
      });
      console.log(items[0]);
      dog = await dogModel.insertMany(items);
    } else {
      let item = req.body.items;
      item.itemAddedBy = req.user.id;
      dog = await dogModel.create(item);
    }

    res.status(200).json({ message: "Item successfully added", item: dog });
  } catch (error) {
    // console.error(error)
    res.status(400).send(error.message);
  }
});

//remove a particular dog from cart
router.delete("/:id", authenticateToken, function (req, res) {
  dogModel.deleteOne({ _id: req.params.id }, (err) => {
    if (err) res.status(400).send("Unable to remove this item");
    res.status(200).send("Removed successfully");
  });
});

//fav a particular dog
router.put("/:id", authenticateToken, function (req, res) {
  let fav = req.query.isFav;
  dogModel.findById(req.params.id, function (err, user) {
    if (err) {
      res.status(500).send({ message: "Item not found" });
    } else {
      if (user) {
        dogModel.findByIdAndUpdate(
          req.params.id,
          {
            $set: { isFav: !fav },
          },
          (err, doc) => {
            if (err) {
              res.status(500).json("Unable to modify item.");
            } else {
              res.status(200).json({
                message: "Item modified",
                item: doc,
              });
            }
          }
        );
      } else {
        if (!req.body.items) {
          return res
            .status(400)
            .send({ message: "Some fields or parameters missing" });
        }
        let item = req.body.items;
        item.itemAddedBy = req.user.id;
        item.isFav = !fav;
        dogModel.create(item).then((doc) => {
          res.status(200).json({
            message: "Item modified",
            item: doc,
          });
        });
      }
    }
  });
});

module.exports = router;
