const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const User = require('./models/user.model');
const routes = express.Router();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/staff', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

routes.route('/login').post(function(req, res) {
  let email = req.body.email, password = req.body.password;
  User.findOne({email: email, password: password}, function (err, user) {
    if(err) {
      console.log("login", err);
    }
    else {
      console.log("pwd: ", user);
      if(user != null) {
        res.json({"status": "success", name: user.name, email: user.email});
      }
      else {
        res.json({"status": "none"});
      }
    }
  });
});

routes.route('/change-pwd').post(function(req, res) {
  let email = req.body.email, password = req.body.password;
  User.findOne({email: email}, function (err, user) {
    if(err) {
      console.log("change-pwd: ", err);
    }
    else {
      if(user != null) {
        user.password = password
        user.save();
        res.json({"status": "success"});
      }
      else {
        res.json({"status": "none"});
      }
    }
  });
});

routes.route('/add-user').post(function(req, res) {
  let user = new User(req.body);
  user.create_date = new Date();
  user.save()
      .then(user => {
          res.status(200).json({'user': 'user added successfully'});
      })
      .catch(err => {
          res.status(400).send('adding new user failed');
      });
});

routes.route('/get-users').get(function(req, res) {
  User.find( function (err, users) {
    if(err) {
      console.log("get-User", err);
    }
    else {
      res.json(users);
    }
  });
});

app.use('/', routes);

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
})