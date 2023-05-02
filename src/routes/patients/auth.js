const { patientLogin } = require("../../controllers/patients/auth_controller");

var Router = require("express").Router();

Router.post("/login", (req, res, next) => {
  try {
    patientLogin(req, res, next);
  } catch (err) {
    console.log(err);
  }
});

module.exports = Router;
