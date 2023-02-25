const express = require("express");
const { getAllProducts } = require("../controllers/productController");

const router = express.Route();

router.route("/products").get(getAllProducts);

module.exports = router