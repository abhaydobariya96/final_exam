const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema(
    {
        QTy: {
            type: Number,
            default: 0
        },
        product_details: {
            type: mongoose.Types.ObjectId,
            ref: "product"
        },

        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)
const cart = mongoose.model("cart", cartSchema);
module.exports = cart;