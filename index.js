var express = require("express");
var app = express();

// ! Import Libraries
require("dotenv").config();
var morgan = require("morgan");
var cors = require("cors");

// ! Database Configuration
const { client } = require("./src/config/dbConfig");
// const { admin, adminRouter } = require("./src/admin/admin");

// ! Sub Routes
var PatientAuth = require("./src/routes/patients/auth");
var HospitalAuth = require("./src/routes/hospital/auth");


var PatientPrivate = require("./src/routes/patients/private")
const { readNFC } = require("./src/utils/readNFC");

// ! Configuration
app.use(morgan("common"));
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use("/patient", PatientAuth);
app.use("/patient/private", PatientPrivate);


app.use("/hospital", HospitalAuth);
// app.use(admin.options.rootPath, adminRouter);

app.get("/", (req, res) => {
  res.send("Status: True");
});

app.post("/nfc", async (req, res) => {
  console.log("Reading")
  var data = await readNFC(res);
  console.log(data)
  // if(data){
    // res.status(200).json({
    //   msg: "Read: True",
    //   uid: data,
    // });
  // }
});

var PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server Status: Running  http://localhost:${PORT}`);
});
