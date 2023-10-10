const { productService } = require("../services")
/**create product */
const createProduct = async (req, res) => {
    try {
        const reqBody = req.body;
        const product = await productService.createProduct(reqBody);
        if (!product) {
            throw new Error("product not found!")
        }
        res.status(200).json({
            success: true,
            message: ("product create successfully!"),
            data: { product }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**list product */
const getProduct = async (req, res) => {
    try {
        const reqBody = req.body;
        const product = await productService.getProduct(reqBody);
        if (!product) {
            throw new Error("product not found!")
        }
        res.status(200).json({
            success: true,
            message: ("product list successfully!"),
            data: { product }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**delete product */
const deleteProduct = async (req, res) => {
    try {
        const id = req.params.Id;
        const productEx = await productService.getProduct();
        if (!productEx) {
            throw new Error("product not found!")
        }
        const product = await productService.deleteProduct(id)
        res.status(200).json({
            success: true,
            message: ("product delete successfully!"),
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**update product */
const updateProduct = async (req, res) => {
    try {
        const id = req.params.Id;
        const productEx = await productService.getProductById(id);
        if (!productEx) {
            throw new Error("product not found!")
        }
        const product = await productService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("product update successfully!"),
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createProduct,
    getProduct,
    deleteProduct,
    updateProduct
}