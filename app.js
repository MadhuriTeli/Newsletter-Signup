const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
  //res.send("<h1>Hello World</h1>");
});

app.post("/", function(req, res){
  var firstName = req.body.firstname;
  var lastName = req.body.lastname;
  var email = req.body.email;

  console.log(firstName, lastName, email);
});

app.listen(3000, function(){
  console.log("Server is hopefully running on port 3000");
});
