const express = require("express");
const router = express.Router();
const Project = require("../models/projectSchema");
const ErrorHandler = require("../utils/ErrorHandler");
const axios = require("axios");

// create project
router.post("/create-project", async (req, res, next) => {
  try {
    const project = await Project.create(req.body);

    res.status(201).json({ success: true, project });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// update project
router.put("/update-project/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const upadteProject = await Project.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!upadteProject) {
      return next(new ErrorHandler("project not found", 400));
    }

    res.status(201).json({ success: true, project: upadteProject });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// get project
router.get("/get-project/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const findProject = await Project.findById(id);

    if (!findProject) {
      return next(new ErrorHandler("project not found", 400));
    }

    res.status(201).json({ success: true, project: findProject });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// delete project
router.delete("/delete-project/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const proejctDeleted = await Project.findByIdAndRemove(id);

    if (!proejctDeleted) {
      return next(new ErrorHandler("project not found", 400));
    }

    res
      .status(201)
      .json({ success: true, message: "delete project successfull" });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.find();

    res.status(201).json({ success: true, projects });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// router.post("/upload-video/:id", async (req, res, next) => {
//   const { id } = req.params;
//   console.log(req.body);

//   try {


//     const vimeoConfig = {
//       headers: {
//         Authorization: `Bearer fb7a7369a664c108a3f6ea0a58e575fb`, 
//         'Content-Type': 'multipart/form-data',
//       },
//     };

//     const response = await axios.put('https://api.vimeo.com/me/videos', req.body, {
//       headers: {
//         'Authorization': `Bearer YOUR_ACCESS_TOKEN`,
//         'Content-Type': 'multipart/form-data',
//       },
//     });

//     const videoData = response.data;

//     console.log(videoData);

//     // res.status(201).json({ success: true, project: findProject });
//   } catch (error) {
//     return next(new ErrorHandler(error.message, 400));
//   }
// });

module.exports = router;
