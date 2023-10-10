const express = require("express");
const { userVallidation } = require("../../validations")
const { userController } = require("../../controllers")
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create user */
router.post(
    "/create-user",
    validate(userVallidation.createUser),
    userController.createUser
);

/**list user */
router.get(
    "/get-user",
    validate(userVallidation.getUser),
    userController.getUser
);

/**delete user */
router.delete(
    "/delete-user/:Id",
    userController.deleteUser
);

/**update user */
router.put(
    "/update-user/:Id",
    userController.updateUser
);

/**email send */
router.post(
    "/send-mail",
    validate(userVallidation.sendMail),
    userController.sendMail
);



module.exports = router