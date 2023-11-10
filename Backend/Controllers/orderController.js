const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");

// Create new Order
exports.newOrder = async function (req, res, next) {

    try {
        const { shippingInfo, orderItems, paymentInfo, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;

        const order = await orderModel.create({
            shippingInfo,
            orderItems,
            paymentInfo,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
            paidAt: Date.now(),
            user: req.user._id,
        });

        res.status(201).json({
            success: true,
            order,
        });
    } catch (error) {
        console.log("Failed to create product due to following error: ", error);
    }


};

//Get single order ------ ADMIN
exports.getSingleOrder = async function (req, res, next) {

    const order = await orderModel.findById(req.params.id).populate("user", "name email");

    if (!order) {
        return next(new ErrorHandler("No order found", 401));
    }

    res.json({
        success: true,
        order
    })
}


// Get all orders of logged in user
exports.myOrders = async function (req, res, next) {

    try {
        const orders = await orderModel.find({ user: req.user._id });

        if (!orders) {
            res.json({
                message: "No orders found!"
            });
        }

        res.json({
            success: true,
            orders
        })

    } catch (error) {
        console.log("Error :: ", error)
    }
}

// Get all orders ------ADMIN
exports.getAllOrders = async function (req, res, next) {
    try {
        const orders = await orderModel.find();

        if (!orders) {
            return next(new ErrorHandler("No orders found!", 401));
        }

        let totalAmount = 0;
        orders.forEach((order) => {
            totalAmount += order.totalPrice;
        })

        res.status(200).json({
            success: true,
            orders,
            totalAmount
        });
    } catch (error) {
        console.log("Error :: ", error);
    }
}

//Update order status -----ADMIN
exports.updateOrder = async function (req, res, next) {
    try {
        const order = await orderModel.findById(req.params.id);

        if (!order) {
            return next(new ErrorHandler("Order not found with this Id", 404));
        }

        if (order.orderStatus === "Delivered") {
            return next(new ErrorHandler("You have already delivered this order", 400));
        }

        if (req.body.status === "Shipped") {
            order.orderItems.forEach(async (o) => {
                await updateStock(o.product, o.quantity);
            });
        }
        order.orderStatus = req.body.status;

        if (req.body.status === "Delivered") {
            order.deliveredAt = Date.now();
        }

        await order.save({ validateBeforeSave: false });
        res.status(200).json({
            success: true,
        });
    } catch (error) {
        console.log("Error :: ", error)
    }
}

async function updateStock(id, quantity) {
    const product = await productModel.findById(id);

    product.Stock -= quantity;

    await product.save({ validateBeforeSave: false });
}

exports.deleteOrder = async function (req, res, next) {

    try {
        const order = await orderModel.findByIdAndDelete(req.params.id);

        if (!order) {
            return next(new ErrorHandler("Order not found with this Id", 404));
        }

        res.status(200).json({
            success: true,
        });
    } catch (error) {
        console.log("Error :: ", error);
    }

}

