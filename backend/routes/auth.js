const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");
const ErrorHandler = require("../utils/ErrorHandler");
const sendToken = require("../utils/sendToken");

// user register
router.post("/create-user", async (req, res, next) => {
  const {  email } = req.body;

  try {
    const findUser = await User.findOne({ email });

    if (findUser) {
      return next(new ErrorHandler("user Elready exist", 400));
    }

    const newUser = await User.create(req.body);

    res
      .status(201)
      .json({
        success: true,
        user: newUser,
        message: "Successful registration, you must login in",
      });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// login user
router.post("/login", async(req, res, next) => {
    const {email, password} = req.body

    try {
        if (!email || !password) {
            return next(new ErrorHandler("Please provide all fields", 404));
          }

        const findUser = await User.findOne({email}).select("+password");

        if (!findUser) {
            return next(new ErrorHandler("User Not Found", 400));
        }

        const correctPassword =  await findUser.comparePassword(password)

        if (!correctPassword) {
            return next(new ErrorHandler("some think is wrong", 400));
        }

        return sendToken(findUser, 201, res)
        
    } catch (error) {
        return next(new ErrorHandler(error.message, 400));
    }
})

module.exports = router