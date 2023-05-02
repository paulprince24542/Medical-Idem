var jwt = require("jsonwebtoken");

function generate_JWT(data) {
  // console.log(req.headers);
  // var token = req.headers["authtoken"];
  // if(token){

  // }
  var token = jwt.sign(
    {
      _id: data.id,
    },
    "wefewfwef#%#%*Fj"
  );
  if (token) {
    return token;
  }
}

function verify_Authorization() {}

module.exports = {
  generate_JWT,
  verify_Authorization,
};
