const express = require("express");
const Products = require("../data/products");

const router = express.Router();


// get all products
router.get("/", async (req, res) => {
    try {
        const products = await Products.find({});
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server error"});
    }
})

// get product by Id
router.get("/:id", async (req, res) => {
    try {
        const product = await Products.findById(req.params.id);
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server error"});
    }
})

module.exports = router;