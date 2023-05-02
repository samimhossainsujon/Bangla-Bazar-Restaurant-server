const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 5000;

const Chef = require("./Data/ChefData.json");
app.get("/", (req, res) => {
  res.send(Chef);
});

app.get("/ChefCartDetails/:id", (req, res) => {
  const id = req.params.id;
  const SelectedChef = Chef.find((chef) => chef.id === id);
  res.send(SelectedChef);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
