const jwt = require("jsonwebtoken");
const userModel = require('../models/userModel');
const ErrorHandler = require("../utils/errorHandler");

exports.isAuthenticated = async function (req, res, next) {
    try {
        const token = await req.cookies.token;

        // console.log(token);
        // this will return id
        const decodedData = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await userModel.findById(decodedData.id);
        console.log(req.user);
        next();

    } catch (error) {
        console.log("error occured: ", error.message);
    }
}

exports.isAuthorized = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return next(
          new ErrorHandler(
            `Role: ${req.user.role} is not allowed to access this resouce `,
            403
          )
        );
      }
  
      next();
    };

}
