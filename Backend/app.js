const express = require("express");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/error");
const bodyParser = require("body-parser");
// const fileUpload = require("express-fileupload")

const app = express();


app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(fileUpload());

// Routes imports
const productRoute = require("./Routes/productRoute");
const userRoute = require("./Routes/userRoute");
const orderRoute = require("./Routes/orderRoute");


app.use("/api/v1", productRoute)
app.use("/api/v1", userRoute);
app.use("/api/v1", orderRoute);


if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: "Backend/config/config.env" });
}

app.use(errorMiddleware);

module.exports = app;