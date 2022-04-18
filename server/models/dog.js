const mongoose = require("mongoose")

const dogsSchema = new mongoose.Schema({
    dog: { type: Object, default: null },
    price: Number,
    status: {
        type: String,
        enum: ["pending", "purchased"],
        default: "pending"
    },
    addedAt: { type: Date, default: Date.now() },
    purchasedAt: { type: Date, default: null },
    isFav: { type: Boolean, default: false },
    itemAddedBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "users",
        default: null
    }

})

const dogModel = mongoose.model("Dogs", dogsSchema);
module.exports = dogModel