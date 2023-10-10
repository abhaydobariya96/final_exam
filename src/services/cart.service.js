const { Cart } = require("../models")

/**
 * create Cart  */
const createCart = async (reqBody) => {
    return Cart.create(reqBody)
};
/**list Cart */
const getCart = async () => {
    return Cart.find().populate("product_details", { product_name: 1, product_des: 1, price: 1 })
};

/**delete Cart */
const deleteCart = async (id) => {
    return Cart.findByIdAndDelete(id)
};

/**get Cart */
const getCartById = async (id) => {
    return Cart.findById(id)
};

/**update Cart */
const updateDetails = async (id, updateBody) => {
    return Cart.findByIdAndUpdate(id, { $set: updateBody })
};


module.exports = {
    createCart,
    getCart,
    deleteCart,
    getCartById,
    updateDetails
}