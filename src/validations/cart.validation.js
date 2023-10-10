const Joi = require("joi")

/**create cart */
const createCart = {
    body: Joi.object().keys({
        QTy: Joi.number().integer().required(),
        product_details: Joi.string().required().trim(),
    })
}
/**list cart */
const getCart = {
    query: Joi.object().keys({
        QTy: Joi.number().integer(""),
        product_details: Joi.string().allow("").trim(),
    })
}
module.exports = {
    createCart,
    getCart,
}