const express = require("express");
const paymentRouter = express.Router();
// const webhookSecret = "REDACTED_SECRET";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


const { isAuthenticated } = require("../middleware/auth");
const { processPayment, useWebhook, returnNewOrder } = require("../Controllers/paymentController");


// Configure express.raw() middleware to parse the raw request body
paymentRouter.use(express.raw({ type: 'application/json' }));

paymentRouter.route("/payment/process").post(isAuthenticated, processPayment);
paymentRouter.route("/webhook").post(useWebhook);
paymentRouter.route("/newOrder").get(returnNewOrder);

module.exports = paymentRouter;
