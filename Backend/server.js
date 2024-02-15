const app = require("./app");
// const cloudinary = require("cloudinary");
const { connectDatabase } = require("./config/database");
// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// const stripe = require("stripe")('sk_test_51OfNngSJ5fUyBXC4JzsSw0VtvCkTaq1HGmqFCtK6D8m3p6Io6craOuaCvyO42ELi8LzkFcVlJ4LdD7RXJPOFybQi00NLPYl15P');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// Connecting to database
connectDatabase();

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});