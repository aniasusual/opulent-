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

    ALL_ORDERS_REQUEST,
    ALL_ORDERS_SUCCESS,
    ALL_ORDERS_FAIL,

    UPDATE_ORDER_REQUEST,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_FAIL,
    UPDATE_ORDER_RESET,

    DELETE_ORDER_REQUEST,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_FAIL,
    DELETE_ORDER_RESET,

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

export const allOrdersReducer = createReducer({ orders: [] }, {
    [ALL_ORDERS_REQUEST]: (state, action) => {
        return {
            loading: true,
        };
    },

    [ALL_ORDERS_SUCCESS]: (state, action) => {
        return {
            loading: false,
            orders: action.payload,
        };
    },

    [ALL_ORDERS_FAIL]: (state, action) => {
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

export const orderReducer = createReducer({ orders: [] }, {
    [UPDATE_ORDER_REQUEST]: (state, action) => {
        return {
            ...state,
            loading: true,
        };
    },
    [DELETE_ORDER_REQUEST]: (state, action) => {
        return {
            ...state,
            loading: true,
        };
    },

    [UPDATE_ORDER_SUCCESS]: (state, action) => {
        return {
            ...state,
            loading: false,
            isUpdated: action.payload,
        };
    },
    [DELETE_ORDER_SUCCESS]: (state, action) => {
        return {
            ...state,
            loading: false,
            isDeleted: action.payload,
        };
    },

    [UPDATE_ORDER_FAIL]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    },
    [DELETE_ORDER_FAIL]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    },

    [UPDATE_ORDER_RESET]: (state, action) => {
        return {
            ...state,
            isUpdated: false,
        };
    },
    [DELETE_ORDER_RESET]: (state, action) => {
        return {
            ...state,
            isDeleted: false,
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
