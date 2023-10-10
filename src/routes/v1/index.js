const express = require("express")

const userRoute = require("./user.route")
const productRoute = require("./product.roure")
const cartRoute = require("./cart.route")

const router = express.Router();

router.use("/user", userRoute)
router.use("/product", productRoute)
router.use("/cart", cartRoute)

module.exports = router
