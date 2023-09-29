const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const  conactionMongodb = require("./db/database");
const gloabelError = require("./middleware/globalError");

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5174", "http://localhost:5173"],
    optionsSuccessStatus: 200, // For legacy browser support
  })
);

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: "./config/.env" });
  }

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
const auth = require("./routes/auth")
const user = require("./routes/user")
const project = require("./routes/project")

app.use("/api/v1/auth", auth)
app.use("/api/v1/users", user)
app.use("/api/v1/projects", project)



app.get("/", (req, res) => {
  res.send("run server");
});

// connect mongodb
conactionMongodb();

// global error
app.use(gloabelError)

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Server is running on http://localhost/${process.env.PORT || 3000}`
  );
});

process.on("unhandledRejection", (err) => {
  console.log(`shutting down the server for ${err.message}`);
  console.log("shutting down the server for unhandling promise rejection");

  server.close(() => {
    process.exit(1);
  });
});
