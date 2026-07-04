const express = require("express");
const router = express.Router();

const {
  addProduct,
  getProducts,
  getProductById,
} = require("../controllers/productController");

const protect = require("../middleware/authMiddleware");

// Add Product
router.post("/", addProduct);

// Get All Products (Protected for testing)
router.get("/", getProducts);

// Get Single Product
router.get("/:id", getProductById);

module.exports = router;