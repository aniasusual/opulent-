import {
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,

    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,

    LOGOUT_SUCCESS,
    LOGOUT_FAIL,

    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PROFILE_RESET,

    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAIL,
    UPDATE_PASSWORD_RESET,

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
    [LOAD_USER_REQUEST]: (state, action) => {
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
    [LOAD_USER_SUCCESS]: (state, action) => {
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
    [LOAD_USER_FAIL]: (state, action) => {
        return {
            loading: false,
            isAuthenticated: false,
            user: null,
            error: action.payload
        };
    },

    [LOGOUT_SUCCESS]: (state, action)=>{
        return {
            loading: false,
            user: null,
            isAuthenticated: false

        }
    },

    [LOGOUT_FAIL]: (state, action)=>{
        return {
            ...state,
            loading: false,
            error: action.payload
        }
    },


    [CLEAR_ERRORS]: (state, action) => {
        return {
            ...state,
            error: null,
        };
    },

})

initialState = {};

export const profileReducer = createReducer(initialState, {

    [UPDATE_PROFILE_REQUEST]: (state, action) => {
        return {
            ...state,
            loading:true
        };
    },

    [UPDATE_PASSWORD_REQUEST]: (state, action) => {
        return {
            ...state,
            loading:true
        };
    },

    [UPDATE_PROFILE_SUCCESS]: (state, action) => {
        return {
            ...state,
            loading: false,
            isUpdated: action.payload

        };
    },

    [UPDATE_PASSWORD_SUCCESS]: (state, action) => {
        return {
            ...state,
            loading: false,
            isUpdated: action.payload

        };
    },


    [UPDATE_PROFILE_FAIL]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.payload
        };
    },
    [UPDATE_PASSWORD_FAIL]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.payload
        };
    },

    [UPDATE_PROFILE_RESET]: (state, action)=>{
        return{
            ...state,
            isUpdated:false
        }
    },
    [UPDATE_PASSWORD_RESET]: (state, action)=>{
        return{
            ...state,
            isUpdated:false
        }
    },

    [CLEAR_ERRORS]: (state, action) => {
        return {
            ...state,
            error: null,
        };
    },

})

