import * as express from "express";

const app = express();
const port = process.env.PORT || 3002;

app.get("/users", (req, res) => {
  res.json({
    users: [],
  });
});
app.post("/users", (req, res) => {
  res.status(201).json({
    message: "ok",
    id: 1234,
  });
});
app.get("/users/:id/product", (req, res) => {
  res.json({
    products: [],
  });
});
app.listen(port, () => {
  console.log("api corriendo en ", port);
});
