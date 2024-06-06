const express = require("express");

const kodersRouter = require("./routes/koders.router");
const authRouter = require("./routes/auth.router");
const generationRouter = require("./routes/generation.router");

const cors = require('cors')
const app = express();

// middleware
app.use(express.json());

app.use(cors())

app.use("/koders", kodersRouter);
app.use("/auth", authRouter);
app.use("/generations", generationRouter);

app.get("/", (request, response) => {
  response.json({
    message: "Koders APIv1",
  });
});

module.exports = app;
