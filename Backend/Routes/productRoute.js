const express = require('express');
const {getAllProducts, addProduct, getById, updateById, deleteById, createProductReview, getAllReviews, deleteReview, getProductDetails} = require("../Controllers/productController");
const { isAuthenticated, isAuthorized } = require('../middleware/auth');

const productRouter = express.Router();

productRouter.route('/products').get(getAllProducts)

productRouter.route('/admin/products/new').post(isAuthenticated, isAuthorized("admin"), addProduct);

productRouter.route('/admin/products/:id').get(getById).put(isAuthenticated, isAuthorized("admin"), updateById).delete(isAuthenticated, isAuthorized("admin"), deleteById);

productRouter.route("/product/:id").get(getProductDetails);

productRouter.route("/review").put(isAuthenticated, createProductReview);

productRouter.route("/reviews").get(getAllReviews).delete(isAuthenticated, deleteReview);

module.exports = productRouter;