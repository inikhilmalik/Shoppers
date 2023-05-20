const express = require("express");
const server = require("./config/db.js");
const { auth } = require("./middleware/auth.middleware.js");
const { userRouter } = require("./routes/user.route.js");

require("dotenv").config();
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/", userRouter);

// app.use(auth);


app.listen(process.env.PORT_NUMBER, () => {
  console.log(`Server is running at Port ${process.env.PORT_NUMBER}`);
  server();
});
