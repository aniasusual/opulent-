import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
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