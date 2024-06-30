const express = require("express");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/error");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const app = express();


app.use(cookieParser());
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload())
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
//test comment


app.use(cors({
    origin: "http://localhost:3000", // Add your frontend URL here
    // origin: "https://660ed9e7987141235b1db971--thunderous-begonia-288545.netlify.app", // Add your frontend URL here
    credentials: true, // Allow cookies to be sent with the request
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
}));


if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: "Backend/config/config.env" });
}

// Routes imports
const productRoute = require("./Routes/productRoute");
const userRoute = require("./Routes/userRoute");
const orderRoute = require("./Routes/orderRoute");
const paymentRoute = require("./Routes/paymentRoute");


app.use("/api/v1", productRoute)
app.use("/api/v1", userRoute);
app.use("/api/v1", orderRoute);
app.use("/api/v1", paymentRoute);


app.use(errorMiddleware);

module.exports = app;