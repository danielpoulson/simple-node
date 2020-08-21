import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
  res.status(200).send("WHATABYTE: Food For Devs");
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});


