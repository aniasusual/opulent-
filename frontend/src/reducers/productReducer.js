import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUESTS,
    ALL_PRODUCT_SUCCESS,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_SUCCESS,

    CLEAR_ERRORS
} from "../constants/productConstants";


import { createReducer } from "@reduxjs/toolkit"

let initialState = {
    products: []
}

export const productsReducer = createReducer(initialState, {

    [ALL_PRODUCT_REQUESTS]: (state, action) => {
        return {
            loading: true,
            products: [],
        };
    },

    [ALL_PRODUCT_SUCCESS]: (state, action) => {
        return {
            loading: false,
            products: action.payload.products,
            productsCount: action.payload.productsCount,
            resultPerPage: action.payload.resultPerPage,
        };
    },

    [ALL_PRODUCT_FAIL]: (state, action) => {
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


export const productDetailsReducer = createReducer({ product: {} }, {

    [PRODUCT_DETAILS_REQUEST]: (state, action) => {
        return {
            loading: true,
            ...state,
        };
    },

    [PRODUCT_DETAILS_SUCCESS]: (state, action) => {
        return {
            loading: false,
            product: action.payload,
        };
    },

    [PRODUCT_DETAILS_FAIL]: (state, action) => {
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
