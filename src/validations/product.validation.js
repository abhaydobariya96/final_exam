const Joi = require("joi")

/**create product */
const createProduct = {
    body: Joi.object().keys({
        product_name: Joi.string().required().trim(),
        product_des: Joi.string().required().trim(),
        image: Joi.string().allow("").trim(),
        price: Joi.number().integer("")
    })
}
/**list product */
const getProduct = {
    query: Joi.object().keys({
        product_name: Joi.string().allow("").trim(),
        product_des: Joi.string().allow("").trim(),
        image: Joi.string().allow("").trim(),
        price: Joi.number().integer("")
    })
}
module.exports = {
    createProduct,
    getProduct,
}