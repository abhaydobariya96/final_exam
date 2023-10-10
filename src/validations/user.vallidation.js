const Joi = require("joi")

/**create User */
const createUser = {
    body: Joi.object().keys({
        user_name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        phone: Joi.number().required(),
        address: Joi.string().required().trim(),
    })
}
/**list user */
const getUser = {
    query: Joi.object().keys({
        user_name: Joi.string().allow("").trim(),
        email: Joi.string().allow("").trim(),
        phone: Joi.number().allow(""),
        address: Joi.string().allow("").trim(),
    })
}

/** email send */
const sendMail = {
    body: Joi.object({
        email: Joi.string().required().trim().email(),
        subject: Joi.string().required().trim(),
        text: Joi.string().required().trim(),
    }),
};

module.exports = {
    createUser,
    getUser,
    sendMail
}