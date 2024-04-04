import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./paymentSuccess.scss";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  CLEAR_ERRORS,
} from "../../constants/orderConstants";
import { EMPTY_CART } from "../../constants/cartConstants";

const OrderSuccess = () => {
  const dispatch = useDispatch();

  const fetchData = () => async (dispatch) => {
    try {
      dispatch({ type: CREATE_ORDER_REQUEST });

      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/newOrder`, { withCredentials: true });
      // console.log("response in OrderSuccess", response);

      const data = response.data.newOrder;
      // console.log("response in OrderSuccess", data);
      // console.log("retrieved data in success", response.data.newOrder);
      // console.log("data ========", data);
      dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
      localStorage.setItem('cartItems', JSON.stringify([]));
      dispatch({ type: EMPTY_CART })
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch({
        type: CREATE_ORDER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/orders">View Orders</Link>
    </div>
  );
};

export default OrderSuccess;
