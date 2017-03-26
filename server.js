const express = require("express");
const app = express();

// router
const index = require("./routes/index");

app.use("/", index)

app.set("view engine", "ejs")

app.listen(3000, () => {
  console.log(`Server has been started!`);
})
