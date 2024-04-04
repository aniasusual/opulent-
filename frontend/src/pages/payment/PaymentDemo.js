import React, { useState, useEffect, useRef } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import CheckOutForm from "../../components/checkOutform/CheckOutForm";
import "./payment.scss";

const Payment = () => {
    const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

    const [clientSecret, setClientSecret] = useState("");
    const [stripeApiKey, setStripeApiKey] = useState("");

    const paymentData = {
        amount: Math.round(orderInfo.totalPrice * 100),
    };

    async function getStripeApiKey() {
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/stripeapikey`, { withCredentials: true });

        setStripeApiKey(data.stripeApiKey);
        console.log(stripeApiKey);
    }

    useEffect(async () => {
        getStripeApiKey();
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true
            };
            const secretObject = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/payment/process`, paymentData, config);

            setClientSecret(secretObject.data.clientSecret);
        } catch (error) {
            console.log("chuchu error: ", error);
        }
    }, []);

    const appearance = {
        theme: "stripe",
    };
    const options = {
        clientSecret,
        appearance,
    };
    return (
        <div className="App">
            {clientSecret && (
                <Elements options={options} stripe={loadStripe(stripeApiKey)}>
                    <CheckOutForm />
                </Elements>
            )}
        </div>
    );
};

export default Payment;
