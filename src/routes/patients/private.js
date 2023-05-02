var Router = require("express").Router();

Router.post("/add", (req, res, next) => {
  try {
   console.log(req.body)
   
  } catch (err) {
    console.log(err);
  }
});

module.exports = Router;
