const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();
  console.log("token tak baat pahonch rahi hai")

  // options for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    sameSite: "None",
    secure: true
  };
  // console.log(token)

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
  });
};

module.exports = sendToken;