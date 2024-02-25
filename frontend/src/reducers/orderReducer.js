import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,

    MY_ORDERS_REQUEST,
    MY_ORDERS_SUCCESS,
    MY_ORDERS_FAIL,

    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,

    CLEAR_ERRORS
} from "../constants/orderConstants"

import { createReducer } from "@reduxjs/toolkit"


export const newOrderReducer = createReducer({}, {

    [CREATE_ORDER_REQUEST]: (state, action) => {
        return {
            ...state,
            loading: true,
        };
    },

    [CREATE_ORDER_SUCCESS]: (state, action) => {
        console.log(action.payload);
        return {
            loading: false,
            order: action.payload,
        };
    },

    [CREATE_ORDER_FAIL]: (state, action) => {
        return {
            loading: false,
            error: action.payload,
        };
    },

    [CLEAR_ERRORS]: (state, action) => {
        return {
            ...state,
            error: null,
        };
    },
})

export const myOrdersReducer = createReducer({ orders: [] }, {
    [MY_ORDERS_REQUEST]: (state, action) => {
        return {
            loading: true,
        };
    },

    [MY_ORDERS_SUCCESS]: (state, action) => {
        return {
            loading: false,
            orders: action.payload,
        };
    },

    [MY_ORDERS_FAIL]: (state, action) => {
        return {
            loading: false,
            error: action.payload,
        };
    },

    [CLEAR_ERRORS]: (state, action) => {
        return {
            ...state,
            error: null,
        };
    },
})

export const orderDetailsReducer = createReducer({ order: {} }, {
    [ORDER_DETAILS_REQUEST]: (state, action) => {
        return {
            loading: true,
        };
    },

    [ORDER_DETAILS_SUCCESS]: (state, action) => {
        return {
            loading: false,
            order: action.payload,
        };
    },

    [ORDER_DETAILS_FAIL]: (state, action) => {
        return {
            loading: false,
            error: action.payload,
        };
    },

    [CLEAR_ERRORS]: (state, action) => {
        return {
            ...state,
            error: null,
        };
    },
})
