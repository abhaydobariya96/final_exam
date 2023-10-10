const express = require("express");
const { productVallidation } = require("../../validations")
const { productController } = require("../../controllers")
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create product */
router.post(
    "/create-product",
    validate(productVallidation.createProduct),
    productController.createProduct
);

/**list product */
router.get(
    "/get-product",
    validate(productVallidation.getProduct),
    productController.getProduct
);

/**delete product */
router.delete(
    "/delete-   /:Id",
    productController.deleteProduct
);

/**update product */
router.put(
    "/update-product/:Id",
    productController.updateProduct
);

module.exports = router