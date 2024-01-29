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

    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,

    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,

    CLEAR_ERRORS,
} from "../constants/userConstants";

import { createReducer } from "@reduxjs/toolkit";

// let initialState = {
//     user: [],
// };

export const userReducer = createReducer({ user: {} }, {
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
            user: action.payload,
        };
    },
    [REGISTER_USER_SUCCESS]: (state, action) => {
        return {
            ...state,
            loading: false,
            isAuthenticated: true,
            user: action.payload,
        };
    },
    [LOAD_USER_SUCCESS]: (state, action) => {
        return {
            ...state,
            loading: false,
            isAuthenticated: true,
            user: action.payload,
        };
    },

    [LOGIN_FAIL]: (state, action) => {
        return {
            ...state,
            loading: false,
            isAuthenticated: false,
            user: null,
            error: action.payload,
        };
    },
    [REGISTER_USER_FAIL]: (state, action) => {
        return {
            ...state,
            loading: false,
            isAuthenticated: false,
            user: null,
            error: action.payload,
        };
    },
    [LOAD_USER_FAIL]: (state, action) => {
        return {
            loading: false,
            isAuthenticated: false,
            user: null,
            error: action.payload,
        };
    },

    [LOGOUT_SUCCESS]: (state, action) => {
        return {
            loading: false,
            user: null,
            isAuthenticated: false,
        };
    },

    [LOGOUT_FAIL]: (state, action) => {
        return {
            ...state,
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
});

export const profileReducer = createReducer(
    {},
    {
        [UPDATE_PROFILE_REQUEST]: (state, action) => {
            return {
                ...state,
                loading: true,
            };
        },

        [UPDATE_PASSWORD_REQUEST]: (state, action) => {
            return {
                ...state,
                loading: true,
            };
        },

        [UPDATE_PROFILE_SUCCESS]: (state, action) => {
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        },

        [UPDATE_PASSWORD_SUCCESS]: (state, action) => {
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        },

        [UPDATE_PROFILE_FAIL]: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        },
        [UPDATE_PASSWORD_FAIL]: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        },

        [UPDATE_PROFILE_RESET]: (state, action) => {
            return {
                ...state,
                isUpdated: false,
            };
        },
        [UPDATE_PASSWORD_RESET]: (state, action) => {
            return {
                ...state,
                isUpdated: false,
            };
        },

        [CLEAR_ERRORS]: (state, action) => {
            return {
                ...state,
                error: null,
            };
        },
    }
);

export const forgotPasswordReducer = createReducer(
    {},
    {
        [FORGOT_PASSWORD_REQUEST]: (state, action) => {
            return {
                ...state,
                loading: true,
                error: null,
            };
        },
        [RESET_PASSWORD_REQUEST]: (state, action) => {
            return {
                ...state,
                loading: true,
                error: null,
            };
        },

        [FORGOT_PASSWORD_SUCCESS]: (state, action) => {
            return {
                ...state,
                loading: false,
                message: action.payload,
            };
        },
        [RESET_PASSWORD_SUCCESS]: (state, action) => {
            return {
                ...state,
                loading: false,
                success: action.payload,
            };
        },

        [FORGOT_PASSWORD_FAIL]: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        },
        [RESET_PASSWORD_FAIL]: (state, action) => {
            return {
                ...state,
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
    }
);

// export const forgotPasswordReducer = createReducer({}, action) => {
//     switch (action.type) {
//       case FORGOT_PASSWORD_REQUEST:
//       case RESET_PASSWORD_REQUEST:
//         return {
//           ...state,
//           loading: true,
//           error: null,
//         };
//       case FORGOT_PASSWORD_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           message: action.payload,
//         };

//       case RESET_PASSWORD_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           success: action.payload,
//         };

//       case FORGOT_PASSWORD_FAIL:
//       case RESET_PASSWORD_FAIL:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload,
//         };

//       case CLEAR_ERRORS:
//         return {
//           ...state,
//           error: null,
//         };

//       default:
//         return state;
//     }
//   };
