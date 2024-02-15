
exports.sendStripeApiKey = async (req, res, next) => {
    try {
        res.status(200).json({
            stripeApiKey: process.env.STRIPE_API_KEY,
            stripeSecretKey: process.env.STRIPE_SECRET_KEY
        });

    } catch (error) {
        console.log("error occured: ", error.message);

    }
};

const stripe = require("stripe")('REDACTED_SECRET');

exports.processPayment = async (req, res, next) => {

    try {

        // req.body.items.map((item) => {
        //     totalPrice += item.price * item.quantity
        // })
        // let user = req.body.userData;
        // let shippingInfo = req.body.shippingInfo


        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: req.body.items.map(item => {
                return {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: item.name,
                        },
                        unit_amount: Math.round(item.price * 100 + 0.18 * (item.price * 100))
                    },
                    quantity: item.quantity,

                }
            }),

            success_url: `${process.env.FRONTEND_URL}/payment/success`,
            cancel_url: `${process.env.FRONTEND_URL}/cart`
        })
        // console.log(session)
        res.json({
            url: session.url,
            client_secret: session.client_secret
        })
    }
    catch (e) {
        res.status(500).json({
            error: e.message
        })
    }



}
