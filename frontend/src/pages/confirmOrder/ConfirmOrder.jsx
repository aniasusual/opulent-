import React, { Fragment } from "react";
import CheckoutSteps from "../../pages/checkoutSteps/CheckoutSteps";
import { useSelector } from "react-redux";
import MetaData from "../../components/layout/metadata/Metadata";
import "./confirmOrder.scss";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@material-ui/core";
import axios from "axios"

const ConfirmOrder = () => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = subtotal > 1000 ? 0 : 200;

  const tax = subtotal * 0.18;

  const totalPrice = subtotal + tax + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  // function proceedToPayment() {
  //   const data = {
  //     subtotal,
  //     shippingCharges,
  //     tax,
  //     totalPrice,
  //   };

  //   sessionStorage.setItem("orderInfo", JSON.stringify(data));

  //   fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/payment/process`, {
  //     method: "Post",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     // withCredentials: true,
  //     body: JSON.stringify({
  //       items: cartItems,
  //       userData: user,
  //       shippingInfo: shippingInfo,
  //     }),
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //       return res.json().then((json) => Promise.reject(json));
  //     })
  //     .then(({ url }) => {
  //       window.location = url;
  //     })
  //     .catch((e) => {
  //       console.error(e.error);
  //     });
  // };

  function proceedToPayment() {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/payment/process`, {
      items: cartItems,
      userData: user,
      shippingInfo: shippingInfo,
    }, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        const { url } = response.data;
        window.location = url;
      })
      .catch((error) => {
        console.error(error);
      });
  }


  return (
    <Fragment>
      <MetaData title="Confirm Order" />
      <CheckoutSteps activeStep={1} />
      <div className="confirmOrderPage">
        <div>
          <div className="confirmshippingArea">
            <Typography>Shipping Info</Typography>
            <div className="confirmshippingAreaBox">
              <div>
                <p>Name:</p>
                <span>{user.name}</span>
              </div>
              <div>
                <p>Phone:</p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                <p>Address:</p>
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            <Typography>Your Cart Items:</Typography>
            <div className="confirmCartItemsContainer">
              {cartItems &&
                cartItems.map((item) => (
                  <div key={item.product}>
                    <img src={item.image} alt="Product" />
                    <Link to={`/product/${item.product}`}>
                      {item.name}
                    </Link>{" "}
                    <span>
                      {item.quantity} X ₹{item.price} ={" "}
                      <b>₹{item.price * item.quantity}</b>
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="orderSummary">
            <Typography>Order Summery</Typography>
            <div>
              <div>
                <p>Subtotal:</p>
                <span>₹{subtotal}</span>
              </div>
              <div>
                <p>Shipping Charges:</p>
                <span>₹{shippingCharges}</span>
              </div>
              <div>
                <p>GST:</p>
                <span>₹{tax}</span>
              </div>
            </div>

            <div className="orderSummaryTotal">
              <p>
                <b>Total:</b>
              </p>
              <span>₹{totalPrice}</span>
            </div>

            <button onClick={proceedToPayment}>Proceed To Payment</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmOrder;
