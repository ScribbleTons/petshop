const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name: { type: String, required: [true, "No user name entered."] },
    email: {
        type: String,
        unique: [true, "Another user with this id already exists"],
        required: function() {
            return /[a-z]\@\w\.\w{3}$/.test(this.email)
        }
    },
    role: { type: String, default: "customer" },
    password: { type: String, required: true, minlength: 5 },
    createAt: { type: Date, default: Date.now() },
    modifiedAt: {
        type: Date,
        default: null
    },
    user_url: {
        type: String,
        default: null
    }
    // cart: [{
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref: "Dogs",
    //     default: null
    // }]
});
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;