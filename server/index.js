const express = require("express")
require("dotenv").config()
const cors = require("cors")
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")
const userRoute = require('./routes/user.route')
const cartRoutes = require("./routes/cart.route")
const { signin, signup } = require('./routes/auth.route')

/**
 * database connection
 */
dbService().catch(console.error)
async function dbService() {
    await mongoose.connect("mongodb://localhost:27000/petshop" || process.env.MONGODB_URI)
}

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("tiny"))
app.use(cookieParser());
app.use(cors())
app.get("/", function(req, res) {
    res.send({ message: "It is working" })
});

app.use("/", signup);
app.use("/", signin);

app.use("/users", userRoute);
app.use("/cart/items", cartRoutes)

const port = process.env.PORT || 3001;
app.listen(port, function() {
    console.dir(`running on http://localhost:${port}`);
})