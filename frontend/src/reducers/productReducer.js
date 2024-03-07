import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUESTS,
    ALL_PRODUCT_SUCCESS,

    ADMIN_PRODUCT_FAIL,
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_SUCCESS,

    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,
    NEW_PRODUCT_RESET,

    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_RESET,

    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    DELETE_PRODUCT_RESET,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_SUCCESS,

    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL,
    NEW_REVIEW_RESET,

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

    [ADMIN_PRODUCT_REQUEST]: (state, action) => {
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

    [ADMIN_PRODUCT_SUCCESS]: (state, action) => {
        return {
            loading: false,
            products: action.payload,
            // products: action.payload.products,
        };
    },

    [ALL_PRODUCT_FAIL]: (state, action) => {
        return {
            loading: false,
            error: action.payload,
        };
    },
    [ADMIN_PRODUCT_FAIL]: (state, action) => {
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

export const newReviewReducer = createReducer({}, {

    [NEW_REVIEW_REQUEST]: (state, action) => {
        return {
            ...state,
            loading: true,
        };
    },

    [NEW_REVIEW_SUCCESS]: (state, action) => {
        return {
            loading: false,
            success: action.payload,
        };
    },

    [NEW_REVIEW_FAIL]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    },

    [NEW_REVIEW_RESET]: (state, action) => {
        return {
            ...state,
            success: false,
        };
    },

    [CLEAR_ERRORS]: (state, action) => {
        return {
            ...state,
            error: null,
        };
    },


});

export const newProductReducer = createReducer({}, {

    [NEW_PRODUCT_REQUEST]: (state, action) => {
        return {
            ...state,
            loading: true,
        };
    },

    [NEW_PRODUCT_SUCCESS]: (state, action) => {
        return {
            loading: false,
            success: action.payload.success,
            product: action.payload.product,
        };
    },

    [NEW_PRODUCT_FAIL]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    },

    [NEW_PRODUCT_RESET]: (state, action) => {
        return {
            ...state,
            success: false,
        };
    },

    [CLEAR_ERRORS]: (state, action) => {
        return {
            ...state,
            error: null,
        };
    },


});


export const productReducer = createReducer({}, {

    [DELETE_PRODUCT_REQUEST]: (state, action) => {
        return {
            ...state,
            loading: true,
        };
    },

    [UPDATE_PRODUCT_REQUEST]: (state, action) => {
        return {
            ...state,
            loading: true,
        };
    },

    [DELETE_PRODUCT_SUCCESS]: (state, action) => {
        return {
            ...state,
            loading: false,
            isDeleted: action.payload,
        };
    },

    [UPDATE_PRODUCT_SUCCESS]: (state, action) => {
        return {
            ...state,
            loading: false,
            isUPDATED: action.payload,
        };
    },

    [DELETE_PRODUCT_FAIL]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.payload,

        };
    },

    [UPDATE_PRODUCT_FAIL]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.payload,

        };
    },

    [DELETE_PRODUCT_RESET]: (state, action) => {
        return {
            ...state,
            isDeleted: false,
        };
    },
    [UPDATE_PRODUCT_RESET]: (state, action) => {
        return {
            ...state,
            isUPDATED: false,
        };
    },

    [CLEAR_ERRORS]: (state, action) => {
        return {
            ...state,
            error: null,
        };
    },


})


