// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { productsReducer } from "./reducers/productReducer";


// const reducer = combineReducers({
//     products: productsReducer
// });


// let initialState = {};



// const middleware = [thunk];

// const store = createStore(
//     reducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;

import { configureStore } from "@reduxjs/toolkit"
import { productDetailsReducer, productsReducer } from "./reducers/productReducer";
import { userReducer, profileReducer, forgotPasswordReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import { newOrderReducer } from "./reducers/orderReducer";

let initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
        shippingInfo: localStorage.getItem("shippingInfo")
            ? JSON.parse(localStorage.getItem("shippingInfo"))
            : {},
    },
}

const store = configureStore({

    reducer: {
        products: productsReducer,
        productDetails: productDetailsReducer,
        user: userReducer,
        profile: profileReducer,
        forgotPassword: forgotPasswordReducer,
        cart: cartReducer,
        newOrder: newOrderReducer
    },
    preloadedState: initialState,

})

export default store;
