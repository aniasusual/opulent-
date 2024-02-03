const express = require("express");
const paymentRouter = express.Router();

const { isAuthenticated } = require("../middleware/auth");
const { processPayment, sendStripeApiKey } = require("../Controllers/paymentController");

paymentRouter.route("/payment/process").post(isAuthenticated, processPayment);

paymentRouter.route("/stripeapikey").get(isAuthenticated, sendStripeApiKey);

module.exports = paymentRouter;
