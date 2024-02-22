// exports.newOrder = async function (req, res, next) {

//     try {
//         const { shippingInfo, orderItems, paymentInfo, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;

//         const order = await orderModel.create({
//             shippingInfo,
//             orderItems,
//             paymentInfo,
//             itemsPrice,
//             taxPrice,
//             shippingPrice,
//             totalPrice,
//             paidAt: Date.now(),
//             user: req.user._id,
//         });

//         res.status(201).json({
//             success: true,
//             order,
//         });
//     } catch (error) {
//         console.log("Failed to create product due to following error: ", error);
//     }


// };