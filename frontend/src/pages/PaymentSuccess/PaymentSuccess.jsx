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

const OrderSuccess = () => {
  const dispatch = useDispatch();

  const fetchData = () => async (dispatch) => {
    try {
      dispatch({ type: CREATE_ORDER_REQUEST });

      const response = await axios.get("/api/v1/newOrder");

      const data = response.data.newOrder;
      // console.log("retrieved data in success", response.data.newOrder);
      // console.log("data ========", data);
      dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
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
