const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");
const ErrorHandler = require("../utils/ErrorHandler");

// get user
router.get("/get-user/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const findUser = await User.findById(id);

    if (!findUser) {
      return next(new ErrorHandler("user not found", 400));
    }

    res.status(201).json({ success: true, user: findUser });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// edit user
router.put("/update-user/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updateUser) {
      return next(new ErrorHandler("user not found", 400));
    }

    res.status(201).json({ success: true, user: updateUser });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// delete user
router.delete("/delete-user/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const userDeleted = await User.findByIdAndRemove(id);

    if (!userDeleted) {
      return next(new ErrorHandler("user not found", 400));
    }

    res.status(201).json({ success: true, message: "delete user successfull" });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// get all users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(201).json({ success: true, users });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

module.exports = router;
