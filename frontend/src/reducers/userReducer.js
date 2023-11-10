import {
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,

    CLEAR_ERRORS
} from "../constants/userConstants";

import { createReducer } from "@reduxjs/toolkit"

let initialState = {
    user: []
}

export const userReducer = createReducer(initialState, {

    [LOGIN_REQUEST]: (state, action) => {
        return {
            loading: true,
            isAuthenticated: false,
        };
    },
    [REGISTER_USER_REQUEST]: (state, action) => {
        return {
            loading: true,
            isAuthenticated: false,
        };
    },

    [LOGIN_SUCCESS]: (state, action) => {
        return {
            ...state,
            loading: false,
            isAuthenticated: true,
            user: action.payload

        };
    },
    [REGISTER_USER_SUCCESS]: (state, action) => {
        return {
            ...state,
            loading: false,
            isAuthenticated: true,
            user: action.payload

        };
    },

    [LOGIN_FAIL]: (state, action) => {
        return {
            ...state,
            loading: false,
            isAuthenticated: false,
            user: null,
            error: action.payload
        };
    },
    [REGISTER_USER_FAIL]: (state, action) => {
        return {
            ...state,
            loading: false,
            isAuthenticated: false,
            user: null,
            error: action.payload
        };
    },

    [CLEAR_ERRORS]: (state, action) => {
        return {
            ...state,
            error: null,
        };
    },

})

